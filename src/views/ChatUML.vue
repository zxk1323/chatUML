<template>
  <div class="chatuml">
    <div class="grid-container">
      <div class="chat-panel">
        <div v-if="isUsingFreeApi" class="free-api-banner">
          <el-alert
            type="info"
            :title="t('chatuml.freeApiTitle')"
            :description="t('chatuml.freeApiDescription')"
            :closable="false"
            show-icon
          />
        </div>
        <div class="messages" ref="messagesContainer">
          <div v-for="(message, index) in messages" 
               :key="index" 
               :class="['message', message.role]">
            <div v-if="message.role === 'assistant'" class="assistant-avatar">AI</div>
            <div class="message-content" v-html="renderMessage(message.content)"></div>
          </div>
          <div v-if="isLoading" class="message assistant">
            <div class="assistant-avatar">AI</div>
            <div class="message-content">
              <div class="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </div>
        <div class="input-container">
          <div class="input-box">
            <div class="clear-history" @click="clearHistory">
              {{ t('chatuml.clearChat') }}
            </div>
            <el-input
              v-model="userInput"
              :placeholder="t('chatuml.inputPlaceholder')"
              type="textarea"
              :rows="3"
              resize="none"
              @keydown.enter.exact.prevent="sendMessage"
              @keydown.enter.shift.exact="newLine"
            />
            <el-button 
              type="primary" 
              class="send-button"
              :loading="isLoading"
              @click="sendMessage">
              {{ t('chatuml.send') }}
            </el-button>
          </div>
        </div>
      </div>

      <div class="preview-container">
        <div class="plantuml-syntax">
          <h2>{{ t('chatuml.plantUMLPreview') }}</h2>
          <pre v-if="currentUMLCode">{{ currentUMLCode }}</pre>
          <div v-else class="empty-preview">{{ t('chatuml.noCodeYet') }}</div>
        </div>

        <div class="uml-preview">
          <h2>{{ t('chatuml.umlPreview') }}</h2>
          <img v-if="previewUrl" :src="previewUrl" :alt="t('chatuml.preview')" />
          <div v-else class="empty-preview">{{ t('chatuml.noDiagramYet') }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'
import { ChatOpenAI } from '@langchain/openai'
import { ChatAnthropic } from '@langchain/anthropic'
import { useSettingsStore } from '@/stores/settings'
import { encodePlantUML } from '@/utils/plantuml'

const { t } = useI18n()
const settingsStore = useSettingsStore()

const messagesContainer = ref(null)
const messages = ref([])
const userInput = ref('')
const isLoading = ref(false)
const currentUMLCode = ref('')
const previewUrl = ref('')

// 判断是否正在使用免费公益API
const isUsingFreeApi = computed(() => 
  settingsStore.provider === 'openai' && !settingsStore.openaiApiKey
)

// 免费公益API配置
const FREE_API_GATEWAY = 'https://free.v36.cm'
const FREE_API_KEY = 'sk-tnwb2P8MfopQgq0MCdA1D1AaAe5a4567830cA5C48859Ce79' // 新的免费API密钥

// 初始化聊天模型
const chatModel = computed(() => {
  switch (settingsStore.provider) {
    case 'openai':
      // 检查用户是否设置了API密钥，如果没有则使用免费公益API
      if (!settingsStore.openaiApiKey) {
        return {
          invoke: async (messages) => {
            // 构建用于免费公益API的消息格式
            const formattedMessages = messages.map(msg => ({
              role: msg.role,
              content: msg.content
            }))
            
            // 调用免费公益API
            const response = await fetch(`${FREE_API_GATEWAY}/v1/chat/completions`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${FREE_API_KEY}`
              },
              body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: formattedMessages,
                temperature: settingsStore.temperature
              })
            })
            
            if (!response.ok) {
              const error = await response.json()
              throw new Error(error.error?.message || '免费公益API请求失败')
            }
            
            const data = await response.json()
            return data.choices[0].message.content
          }
        }
      }
      
      // 用户设置了API密钥，使用正常的OpenAI API
      return new ChatOpenAI({
        openAIApiKey: settingsStore.openaiApiKey,
        modelName: settingsStore.modelName,
        temperature: settingsStore.temperature,
      })
      
    case 'claude':
      return new ChatAnthropic({
        anthropicApiKey: settingsStore.claudeApiKey,
        modelName: settingsStore.modelName,
        temperature: settingsStore.temperature,
      })
      
    case 'deepseek':
      // 对于 Deepseek，我们使用自定义实现，因为 LangChain 可能没有原生支持
      return {
        invoke: async (messages) => {
          // 构建用于 Deepseek API 的消息格式
          const formattedMessages = messages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
          
          // 调用 Deepseek API
          const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${settingsStore.deepseekApiKey}`
            },
            body: JSON.stringify({
              model: settingsStore.modelName,
              messages: formattedMessages,
              temperature: settingsStore.temperature
            })
          })
          
          if (!response.ok) {
            const error = await response.json()
            throw new Error(error.error?.message || 'Deepseek API 请求失败')
          }
          
          const data = await response.json()
          return data.choices[0].message.content
        }
      }
      
    default:
      // 默认情况下也检查是否需要使用免费公益API
      if (!settingsStore.openaiApiKey) {
        return {
          invoke: async (messages) => {
            // 构建用于免费公益API的消息格式
            const formattedMessages = messages.map(msg => ({
              role: msg.role,
              content: msg.content
            }))
            
            // 调用免费公益API
            const response = await fetch(`${FREE_API_GATEWAY}/v1/chat/completions`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${FREE_API_KEY}`
              },
              body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: formattedMessages,
                temperature: settingsStore.temperature
              })
            })
            
            if (!response.ok) {
              const error = await response.json()
              throw new Error(error.error?.message || '免费公益API请求失败')
            }
            
            const data = await response.json()
            return data.choices[0].message.content
          }
        }
      }
      
      return new ChatOpenAI({
        openAIApiKey: settingsStore.openaiApiKey,
        modelName: settingsStore.modelName,
        temperature: settingsStore.temperature,
      })
  }
})

// 系统提示词
const systemPrompt = `你是一个PlantUML绘制助手，可以帮助用户生成PlantUML语句的流程图
技能:
- 询问用户需要绘制的图形类型（如类图、时序图、用例图等）
- 提供PlantUML代码示例，帮助用户理解如何绘制所需图形
- 支持用户对图形进行修改和优化，提供相应的代码更新建议
原则:
- 只能提供与PlantUML相关的绘图帮助，不回答其他编程或工具问题
- 所有示例代码和建议都基于PlantUML的官方文档，不能自行编造
- 确保提供的代码是有效的PlantUML代码，能够被PlantUML工具正确解析
- 如果用户询问的是绘制UML图，那么返回PlantUML代码，不要做多余解释`

// 渲染消息内容
const renderMessage = (content) => {
  return marked.parse(content)
}

// 发送消息
const sendMessage = async () => {
  if (!userInput.value.trim() || isLoading.value) return

  const userMessage = userInput.value
  userInput.value = ''
  
  // 添加用户消息
  messages.value.push({
    role: 'user',
    content: userMessage
  })

  isLoading.value = true

  try {
    const response = await chatModel.value.invoke([
      { role: 'system', content: systemPrompt },
      ...messages.value.map(msg => ({
        role: msg.role === 'assistant' ? 'assistant' : 'user',
        content: msg.content
      }))
    ])

    // 添加助手回复
    messages.value.push({
      role: 'assistant',
      content: response
    })

    // 更新 UML 预览
    updateUMLPreview(response)
  } catch (error) {
    messages.value.push({
      role: 'error',
      content: `错误: ${error.message}`
    })
  } finally {
    isLoading.value = false
    await scrollToBottom()
  }
}

// 更新 UML 预览
const updateUMLPreview = (content) => {
  const umlRegex = /@startuml[\s\S]*?@enduml/g
  const matches = content.match(umlRegex)
  
  if (matches && matches.length > 0) {
    const latestUML = matches[matches.length - 1]
    currentUMLCode.value = latestUML
    const encoded = encodePlantUML(latestUML)
    previewUrl.value = `https://www.plantuml.com/plantuml/png/${encoded}`
  }
}

// 清空历史记录
const clearHistory = () => {
  if (window.confirm(t('chatuml.confirmClear'))) {
    messages.value = []
    currentUMLCode.value = ''
    previewUrl.value = ''
  }
}

// 换行处理
const newLine = () => {
  userInput.value += '\n'
}

// 滚动到底部
const scrollToBottom = async () => {
  await nextTick()
  if (messagesContainer.value) {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
  }
}

// 监听消息变化，自动滚动
watch(messages, scrollToBottom)

// 组件加载时添加欢迎消息
onMounted(() => {
  messages.value.push({
    role: 'assistant',
    content: t('chatuml.welcome')
  })
})
</script>

<style lang="scss" scoped>
.chatuml {
  height: calc(100vh - 64px);
  background: var(--background-color-light, #f5f7fa);
  padding: 1rem;
  
  .grid-container {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr; // 改为均等的两列
    gap: 1.5rem;
    max-width: 1600px; // 增加最大宽度
    margin: 0 auto;

    .chat-panel {
      height: 100%;
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      display: flex;
      flex-direction: column;
      overflow: hidden;

      .free-api-banner {
        padding: 0.75rem 1.25rem;
        border-bottom: 1px solid #ebeef5;
      }

      .messages {
        flex: 1;
        overflow-y: auto;
        padding: 1.5rem;
        scroll-behavior: smooth;
        
        .message {
          margin-bottom: 1.5rem;
          display: flex;
          align-items: flex-start;
          animation: fadeIn 0.3s ease-in-out;

          &.assistant {
            .message-content {
              background: #f8f9fa;
              border: 1px solid #ebeef5;
              border-radius: 0.75rem 0.75rem 0.75rem 0;
              box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
            }
          }

          &.user .message-content {
            background: var(--primary-color, #409eff);
            color: white;
            border-radius: 0.75rem 0.75rem 0 0.75rem;
            margin-left: auto;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          }

          &.error .message-content {
            background: #fee2e2;
            color: #dc2626;
            border-radius: 0.75rem;
            border: 1px solid #fca5a5;
          }

          .assistant-avatar {
            width: 2.5rem;
            height: 2.5rem;
            background: var(--primary-color, #409eff);
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            font-weight: bold;
            font-size: 1rem;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          }

          .message-content {
            padding: 1rem 1.25rem;
            max-width: 85%; // 增加最大宽度
            line-height: 1.5;
            font-size: 0.95rem;

            :deep(pre) {
              background: #1e1e1e;
              color: #d4d4d4;
              padding: 1rem;
              border-radius: 0.5rem;
              overflow-x: auto;
              margin: 0.75rem 0;
              font-size: 0.9rem;
              line-height: 1.5;
            }

            :deep(p) {
              margin: 0.5rem 0;
              &:first-child {
                margin-top: 0;
              }
              &:last-child {
                margin-bottom: 0;
              }
            }
            
            :deep(code) {
              background: rgba(0, 0, 0, 0.05);
              padding: 0.2rem 0.4rem;
              border-radius: 0.25rem;
              font-size: 0.9em;
            }
          }
        }

        .typing-indicator {
          display: flex;
          gap: 0.3rem;
          padding: 0.5rem;
          align-items: center;
          justify-content: center;

          span {
            width: 0.5rem;
            height: 0.5rem;
            background: var(--primary-color, #409eff);
            border-radius: 50%;
            animation: bounce 1s infinite;

            &:nth-child(2) { animation-delay: 0.2s; }
            &:nth-child(3) { animation-delay: 0.4s; }
          }
        }
      }

      .input-container {
        padding: 1rem 1.5rem 1.5rem;
        background: white;
        border-top: 1px solid #ebeef5;
        position: relative;
      }

      .input-box {
        position: relative;
        border-radius: 0.75rem;
        background: #f8f9fa;
        padding: 0.5rem;
        border: 1px solid #ebeef5;
        
        .clear-history {
          text-align: right;
          padding: 0 0.5rem 0.5rem;
          color: var(--text-color-light, #909399);
          cursor: pointer;
          font-size: 0.875rem;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          gap: 0.25rem;

          &:hover {
            color: var(--primary-color, #409eff);
          }
          
          &::before {
            content: '🗑️';
            font-size: 0.85rem;
          }
        }

        .el-input {
          margin-bottom: 0.5rem;
          
          :deep(.el-textarea__inner) {
            border: none;
            background: transparent;
            resize: none;
            padding: 0.5rem 0.75rem;
            border-radius: 0.5rem;
            
            &:focus {
              box-shadow: none;
            }
          }
        }

        .send-button {
          width: 100%;
          border-radius: 0.5rem;
          height: 2.5rem;
          font-weight: 500;
        }
      }
    }

    .preview-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      height: 100%;
      
      .plantuml-syntax,
      .uml-preview {
        flex: 1;
        background: white;
        border-radius: 1rem;
        padding: 1.25rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display: flex;
        flex-direction: column;
        overflow: hidden;

        h2 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: var(--text-color, #303133);
          font-weight: 600;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #ebeef5;
        }

        pre {
          flex: 1;
          background: #1e1e1e;
          color: #d4d4d4;
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          overflow: auto;
          margin: 0;
        }

        img {
          max-width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 0.5rem;
          border: 1px solid #ebeef5;
          padding: 0.5rem;
          background: #f8f9fa;
          margin: 0 auto;
          display: block;
          flex: 1;
        }
        
        .empty-preview {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #909399;
          background: #f8f9fa;
          border-radius: 0.5rem;
          border: 1px dashed #dcdfe6;
          font-size: 0.95rem;
        }
      }
      
      .uml-preview {
        display: flex;
        flex-direction: column;
        
        img {
          flex: 1;
          max-height: 100%;
          margin: 0 auto;
          object-fit: contain;
        }
      }
    }
  }
}

@keyframes bounce {
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-0.5rem); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .chatuml .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(50%, 60%) auto;
    
    .preview-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      flex-direction: row;
      height: auto;
      
      .plantuml-syntax, .uml-preview {
        min-height: 300px;
      }
    }
  }
}

@media (max-width: 768px) {
  .chatuml {
    padding: 0.5rem;
    
    .grid-container {
      gap: 1rem;
      
      .preview-container {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto;
        gap: 1rem;
        
        .plantuml-syntax, .uml-preview {
          min-height: 200px;
        }
      }
      
      .chat-panel {
        .messages {
          padding: 1rem;
          
          .message .message-content {
            max-width: 90%;
          }
        }
        
        .input-container {
          padding: 0.75rem;
        }
      }
    }
  }
}
</style> 