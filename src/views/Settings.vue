<template>
  <div class="settings">
    <div class="container">
      <h1>{{ t('settings.title') }}</h1>
      
      <div class="settings-card">
        <h2>{{ t('settings.apiSettings') }}</h2>
        
        <div class="form-group">
          <label>{{ t('settings.provider') }}</label>
          <el-select v-model="provider" class="w-full" @change="handleProviderChange">
            <el-option
              v-for="option in providerOptions"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
          <p class="help-text">{{ t('settings.providerHelp') }}</p>
        </div>
        
        <div class="form-group">
          <label>{{ t('settings.apiKey') }}</label>
          <el-input
            v-model="apiKey"
            type="password"
            show-password
            :placeholder="apiKeyPlaceholder"
          />
          <p class="help-text">{{ t('settings.apiKeyHelp') }}</p>
          <p v-if="provider === 'openai' && !apiKey" class="free-api-hint">
            <el-tag type="success" size="small">{{ t('settings.freeApiAvailable') }}</el-tag> 
            {{ t('settings.freeApiHint') }}
          </p>
        </div>

        <div class="form-group">
          <label>{{ t('settings.model') }}</label>
          <el-select v-model="modelName" class="w-full">
            <el-option
              v-for="model in currentModels"
              :key="model.value"
              :label="model.label"
              :value="model.value"
            />
          </el-select>
          <p class="help-text">{{ t('settings.modelHelp') }}</p>
          <p v-if="provider === 'openai' && !apiKey" class="free-api-hint">
            {{ t('settings.freeApiModelLimit') }}
          </p>
        </div>

        <div class="form-group">
          <label>{{ t('settings.temperature') }}</label>
          <el-slider
            v-model="temperature"
            :min="0"
            :max="2"
            :step="0.1"
            show-input
          />
          <p class="help-text">{{ t('settings.temperatureHelp') }}</p>
        </div>

        <div class="actions">
          <el-button type="primary" @click="saveSettings">
            {{ t('settings.save') }}
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from '@/stores/settings'
import { ElMessage } from 'element-plus'

const { t } = useI18n()
const settingsStore = useSettingsStore()

const provider = ref('')
const apiKey = ref('')
const modelName = ref('')
const temperature = ref(0.7)

const providerOptions = [
  { label: 'OpenAI', value: 'openai' },
  { label: 'Claude', value: 'claude' },
  { label: 'DeepSeek', value: 'deepseek' }
]

const openaiModels = [
  { label: 'GPT-4o-mini', value: 'gpt-4o-mini' },
  { label: 'GPT-3.5 Turbo', value: 'gpt-3.5-turbo' },
  { label: 'GPT-3.5 Turbo (0125)', value: 'gpt-3.5-turbo-0125' },
  { label: 'GPT-3.5 Turbo (1106)', value: 'gpt-3.5-turbo-1106' },
  { label: 'GPT-3.5 Turbo 16K', value: 'gpt-3.5-turbo-16k' },
  { label: 'Net GPT-3.5 Turbo (联网)', value: 'net-gpt-3.5-turbo' }
]

const claudeModels = [
  { label: 'Claude 3 Opus', value: 'claude-3-opus-20240229' },
  { label: 'Claude 3 Sonnet', value: 'claude-3-sonnet-20240229' },
  { label: 'Claude 3 Haiku', value: 'claude-3-haiku-20240307' },
]

const deepseekModels = [
  { label: 'DeepSeek Coder', value: 'deepseek-coder' },
  { label: 'DeepSeek Chat', value: 'deepseek-chat' }
]

const currentModels = computed(() => {
  switch (provider.value) {
    case 'claude':
      return claudeModels
    case 'deepseek':
      return deepseekModels
    default:
      return openaiModels
  }
})

const apiKeyPlaceholder = computed(() => {
  switch (provider.value) {
    case 'claude':
      return t('settings.claudeApiKeyPlaceholder')
    case 'deepseek':
      return t('settings.deepseekApiKeyPlaceholder')
    default:
      return t('settings.apiKeyPlaceholder')
  }
})

const handleProviderChange = () => {
  // 切换提供商时，更新API密钥和默认模型
  switch (provider.value) {
    case 'openai':
      apiKey.value = settingsStore.openaiApiKey
      modelName.value = openaiModels[0].value
      break
    case 'claude':
      apiKey.value = settingsStore.claudeApiKey
      modelName.value = claudeModels[0].value
      break
    case 'deepseek':
      apiKey.value = settingsStore.deepseekApiKey
      modelName.value = deepseekModels[0].value
      break
  }
}

onMounted(() => {
  provider.value = settingsStore.provider
  temperature.value = settingsStore.temperature
  
  // 根据当前提供商设置正确的 API 密钥
  switch (provider.value) {
    case 'openai':
      apiKey.value = settingsStore.openaiApiKey
      break
    case 'claude':
      apiKey.value = settingsStore.claudeApiKey
      break
    case 'deepseek':
      apiKey.value = settingsStore.deepseekApiKey
      break
  }
  
  // 设置模型名称
  modelName.value = settingsStore.modelName
})

const saveSettings = () => {
  // 只有在非OpenAI提供商或有指定API密钥的情况下才检查API密钥
  if (provider.value !== 'openai' && !apiKey.value) {
    ElMessage.error(t('settings.apiKeyRequired'))
    return
  }

  settingsStore.setProvider(provider.value)
  
  // 根据当前提供商保存相应的 API 密钥
  switch (provider.value) {
    case 'openai':
      settingsStore.setOpenaiApiKey(apiKey.value)
      break
    case 'claude':
      settingsStore.setClaudeApiKey(apiKey.value)
      break
    case 'deepseek':
      settingsStore.setDeepseekApiKey(apiKey.value)
      break
  }
  
  // 对于免费公益API服务，强制使用gpt-3.5-turbo模型
  if (provider.value === 'openai' && !apiKey.value && modelName.value !== 'gpt-3.5-turbo') {
    modelName.value = 'gpt-3.5-turbo'
    ElMessage.warning(t('settings.freeApiModelLimit'))
  }
  
  settingsStore.setModelName(modelName.value)
  settingsStore.setTemperature(temperature.value)

  ElMessage.success(t('settings.saveSuccess'))
}
</script>

<style lang="scss" scoped>
.settings {
  padding: 4rem 0;

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
    color: var(--text-color);
  }

  .settings-card {
    background: white;
    border-radius: 0.5rem;
    padding: 2rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: var(--text-color);
    }

    .form-group {
      margin-bottom: 2rem;

      label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: var(--text-color);
      }

      .help-text {
        margin-top: 0.5rem;
        font-size: 0.875rem;
        color: var(--text-color-light);
      }

      .w-full {
        width: 100%;
      }
    }

    .actions {
      text-align: right;
    }
  }

  .free-api-hint {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: #67c23a;
    
    .el-tag {
      margin-right: 0.5rem;
    }
  }
}

@media (max-width: 768px) {
  .settings {
    padding: 2rem 0;

    h1 {
      font-size: 1.5rem;
    }

    .settings-card {
      padding: 1.5rem;

      h2 {
        font-size: 1.25rem;
      }
    }
  }
}
</style> 