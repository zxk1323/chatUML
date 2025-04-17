<template>
  <div class="documentation">
    <div class="container">
      <h1 class="doc-title">{{ t('documentation.title') }}</h1>
      
      <div class="doc-layout">
        <aside class="doc-sidebar">
          <nav>
            <ul>
              <li v-for="section in sections" :key="section.id">
                <a :href="`#${section.id}`" :class="{ active: activeSection === section.id }">
                  {{ section.title }}
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main class="doc-content">
          <section v-for="section in sections" :key="section.id" :id="section.id" class="doc-section">
            <div class="section-header">
              <div class="section-icon">{{ section.icon }}</div>
              <h2>{{ section.title }}</h2>
            </div>
            <div class="content" v-html="section.content"></div>
          </section>
        </main>
      </div>
      
      <div class="doc-footer">
        <p>{{ t('documentation.needMoreHelp') }} <a href="mailto:support@chatuml.com">{{ t('documentation.contactUs') }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const activeSection = ref('getting-started')

const sections = [
  {
    id: 'getting-started',
    title: t('documentation.sections.gettingStarted'),
    icon: '🚀',
    content: `
      <div class="doc-card">
        <h3>${t('documentation.welcome')}</h3>
        <p>${t('documentation.welcomeDesc')}</p>
        
        <div class="step-list">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>${t('documentation.step1Title')}</h4>
              <p>${t('documentation.step1Desc')}</p>
              <img src="/images/docs/chat-interface.png" alt="Chat Interface" class="doc-image">
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>${t('documentation.step2Title')}</h4>
              <p>${t('documentation.step2Desc')}</p>
              <div class="code-example">
                <code>请帮我创建一个表示用户登录流程的活动图</code>
              </div>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>${t('documentation.step3Title')}</h4>
              <p>${t('documentation.step3Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'model-selection',
    title: t('documentation.sections.modelSelection'),
    icon: '🧠',
    content: `
      <div class="doc-card">
        <h3>${t('documentation.modelSelectionTitle')}</h3>
        <p>${t('documentation.modelSelectionDesc')}</p>
        
        <div class="info-box">
          <div class="info-icon">💡</div>
          <div class="info-content">
            <p>${t('documentation.freeApiInfo')}</p>
          </div>
        </div>
        
        <h4>${t('documentation.changeModelTitle')}</h4>
        <div class="step-list">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <p>${t('documentation.changeModelStep1')}</p>
              <img src="/images/docs/settings-button.png" alt="Settings Button" class="doc-image small">
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <p>${t('documentation.changeModelStep2')}</p>
              <img src="/images/docs/provider-selection.png" alt="Provider Selection" class="doc-image">
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <p>${t('documentation.changeModelStep3')}</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <p>${t('documentation.changeModelStep4')}</p>
            </div>
          </div>
        </div>
        
        <h4>${t('documentation.modelComparisonTitle')}</h4>
        <div class="model-comparison">
          <div class="model-card">
            <div class="model-header">
              <span class="model-badge free">免费</span>
              <h5>GPT-3.5 Turbo</h5>
            </div>
            <ul class="model-features">
              <li>${t('documentation.model35Feature1')}</li>
              <li>${t('documentation.model35Feature2')}</li>
              <li>${t('documentation.model35Feature3')}</li>
            </ul>
            <p class="model-recommendation">${t('documentation.model35Recommendation')}</p>
          </div>
          
          <div class="model-card">
            <div class="model-header">
              <span class="model-badge free">免费</span>
              <h5>GPT-4o-mini</h5>
            </div>
            <ul class="model-features">
              <li>${t('documentation.model4oMiniFeature1')}</li>
              <li>${t('documentation.model4oMiniFeature2')}</li>
              <li>${t('documentation.model4oMiniFeature3')}</li>
            </ul>
            <p class="model-recommendation">${t('documentation.model4oMiniRecommendation')}</p>
          </div>
          
          <div class="model-card">
            <div class="model-header">
              <span class="model-badge premium">高级</span>
              <h5>Claude 3 Sonnet</h5>
            </div>
            <ul class="model-features">
              <li>${t('documentation.claudeFeature1')}</li>
              <li>${t('documentation.claudeFeature2')}</li>
              <li>${t('documentation.claudeFeature3')}</li>
            </ul>
            <p class="model-recommendation">${t('documentation.claudeRecommendation')}</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'diagram-types',
    title: t('documentation.sections.diagramTypes'),
    icon: '📊',
    content: `
      <div class="doc-card">
        <h3>${t('documentation.diagramTypesTitle')}</h3>
        <p>${t('documentation.diagramTypesDesc')}</p>
        
        <div class="diagram-grid">
          <div class="diagram-type">
            <h4>${t('documentation.classTitle')}</h4>
            <p>${t('documentation.classDesc')}</p>
            <div class="code-example">
              <code>${t('documentation.classPrompt')}</code>
            </div>
          </div>
          
          <div class="diagram-type">
            <h4>${t('documentation.sequenceTitle')}</h4>
            <p>${t('documentation.sequenceDesc')}</p>
            <div class="code-example">
              <code>${t('documentation.sequencePrompt')}</code>
            </div>
          </div>
          
          <div class="diagram-type">
            <h4>${t('documentation.useCaseTitle')}</h4>
            <p>${t('documentation.useCaseDesc')}</p>
            <div class="code-example">
              <code>${t('documentation.useCasePrompt')}</code>
            </div>
          </div>
          
          <div class="diagram-type">
            <h4>${t('documentation.activityTitle')}</h4>
            <p>${t('documentation.activityDesc')}</p>
            <div class="code-example">
              <code>${t('documentation.activityPrompt')}</code>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'tips-tricks',
    title: t('documentation.sections.tipsTricks'),
    icon: '💡',
    content: `
      <div class="doc-card">
        <h3>${t('documentation.tipsTitle')}</h3>
        <p>${t('documentation.tipsDesc')}</p>
        
        <div class="tip-list">
          <div class="tip">
            <div class="tip-icon">🎯</div>
            <div class="tip-content">
              <h4>${t('documentation.tipDetail1Title')}</h4>
              <p>${t('documentation.tipDetail1')}</p>
            </div>
          </div>
          
          <div class="tip">
            <div class="tip-icon">🔄</div>
            <div class="tip-content">
              <h4>${t('documentation.tipDetail2Title')}</h4>
              <p>${t('documentation.tipDetail2')}</p>
            </div>
          </div>
          
          <div class="tip">
            <div class="tip-icon">📝</div>
            <div class="tip-content">
              <h4>${t('documentation.tipDetail3Title')}</h4>
              <p>${t('documentation.tipDetail3')}</p>
            </div>
          </div>
          
          <div class="tip">
            <div class="tip-icon">🔍</div>
            <div class="tip-content">
              <h4>${t('documentation.tipDetail4Title')}</h4>
              <p>${t('documentation.tipDetail4')}</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 'faq',
    title: t('documentation.sections.faq'),
    icon: '❓',
    content: `
      <div class="doc-card">
        <h3>${t('documentation.faqTitle')}</h3>
        
        <div class="accordion">
          <div class="accordion-item">
            <div class="accordion-header">${t('documentation.faq1Q')}</div>
            <div class="accordion-content">${t('documentation.faq1A')}</div>
          </div>
          
          <div class="accordion-item">
            <div class="accordion-header">${t('documentation.faq2Q')}</div>
            <div class="accordion-content">${t('documentation.faq2A')}</div>
          </div>
          
          <div class="accordion-item">
            <div class="accordion-header">${t('documentation.faq3Q')}</div>
            <div class="accordion-content">${t('documentation.faq3A')}</div>
          </div>
          
          <div class="accordion-item">
            <div class="accordion-header">${t('documentation.faq4Q')}</div>
            <div class="accordion-content">${t('documentation.faq4A')}</div>
          </div>
          
          <div class="accordion-item">
            <div class="accordion-header">${t('documentation.faq5Q')}</div>
            <div class="accordion-content">${t('documentation.faq5A')}</div>
          </div>
        </div>
      </div>
    `
  }
]

const updateActiveSection = () => {
  const sectionElements = document.querySelectorAll('.doc-section')
  const scrollPosition = window.scrollY + 100

  for (const section of sectionElements) {
    if (section.offsetTop <= scrollPosition && 
        section.offsetTop + section.offsetHeight > scrollPosition) {
      activeSection.value = section.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection()
  
  // 手风琴交互
  const accordionHeaders = document.querySelectorAll('.accordion-header')
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement
      parent.classList.toggle('active')
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<style lang="scss" scoped>
.documentation {
  padding: 2rem 0 4rem;
  background-color: #f8f9fa;
  min-height: calc(100vh - 64px);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .doc-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
    color: var(--text-color, #303133);
    font-weight: 700;
  }

  .doc-layout {
    display: grid;
    grid-template-columns: 240px 1fr;
    gap: 2.5rem;
  }

  .doc-sidebar {
    position: sticky;
    top: 100px;
    height: fit-content;
    padding-right: 1rem;
    
    nav {
      background: white;
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.5rem;

          a {
            display: flex;
            padding: 0.75rem 1rem;
            color: var(--text-color-light, #909399);
            text-decoration: none;
            border-radius: 0.5rem;
            transition: all 0.2s;
            font-size: 0.95rem;

            &:hover {
              color: var(--primary-color, #409eff);
              background: rgba(64, 158, 255, 0.1);
            }

            &.active {
              color: var(--primary-color, #409eff);
              background: rgba(64, 158, 255, 0.1);
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  .doc-content {
    section {
      margin-bottom: 3rem;
      scroll-margin-top: 100px;

      .section-header {
        display: flex;
        align-items: center;
        margin-bottom: 1.5rem;
        
        .section-icon {
          font-size: 2rem;
          margin-right: 1rem;
        }
        
        h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--text-color, #303133);
          margin: 0;
        }
      }
    }
  }
  
  .doc-footer {
    text-align: center;
    margin-top: 4rem;
    padding-top: 2rem;
    color: var(--text-color-light, #909399);
    
    a {
      color: var(--primary-color, #409eff);
      text-decoration: none;
      font-weight: 500;
    }
  }

  .doc-card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    
    h3 {
      font-size: 1.5rem;
      margin-top: 0;
      margin-bottom: 1rem;
      color: var(--text-color, #303133);
      font-weight: 600;
    }
    
    h4 {
      font-size: 1.25rem;
      margin: 1.5rem 0 1rem;
      color: var(--text-color, #303133);
      font-weight: 500;
    }
    
    p {
      margin-bottom: 1.25rem;
      line-height: 1.6;
      color: var(--text-color-light, #606266);
      font-size: 1rem;
    }
  }
  
  .step-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
    
    .step {
      display: flex;
      
      .step-number {
        width: 2.5rem;
        height: 2.5rem;
        background: var(--primary-color, #409eff);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.25rem;
        flex-shrink: 0;
        margin-right: 1.25rem;
        box-shadow: 0 4px 8px rgba(64, 158, 255, 0.25);
        margin-top: 0.25rem;
      }
      
      .step-content {
        h4 {
          margin-top: 0;
          margin-bottom: 0.75rem;
        }
        
        p {
          margin-bottom: 1rem;
        }
      }
    }
  }
  
  .doc-image {
    width: 100%;
    border-radius: 0.5rem;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    margin: 1rem 0;
    
    &.small {
      max-width: 300px;
    }
  }
  
  .code-example {
    background: #f8f9fa;
    border: 1px solid #ebeef5;
    border-radius: 0.5rem;
    padding: 1rem;
    margin: 1rem 0;
    overflow-x: auto;
    
    code {
      font-family: 'Courier New', monospace;
      color: #476582;
    }
  }
  
  .info-box {
    display: flex;
    background: rgba(64, 158, 255, 0.1);
    border-left: 4px solid var(--primary-color, #409eff);
    border-radius: 0.5rem;
    padding: 1.25rem;
    margin: 1.5rem 0;
    
    .info-icon {
      font-size: 1.5rem;
      margin-right: 1rem;
    }
    
    .info-content {
      p {
        margin: 0;
      }
    }
  }
  
  .model-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
    
    .model-card {
      background: #f8f9fa;
      border-radius: 0.75rem;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      
      .model-header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        
        h5 {
          font-size: 1.1rem;
          margin: 0;
          font-weight: 600;
        }
        
        .model-badge {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 1rem;
          font-weight: 500;
          margin-right: 0.75rem;
          
          &.free {
            background: #67c23a;
            color: white;
          }
          
          &.premium {
            background: #a855f7;
            color: white;
          }
        }
      }
      
      .model-features {
        padding-left: 1.25rem;
        margin-bottom: 1rem;
        
        li {
          margin-bottom: 0.5rem;
          color: var(--text-color-light, #606266);
        }
      }
      
      .model-recommendation {
        font-size: 0.9rem;
        font-style: italic;
        margin-bottom: 0;
        color: #909399;
        border-top: 1px solid #ebeef5;
        padding-top: 0.75rem;
      }
    }
  }
  
  .diagram-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
    
    .diagram-type {
      background: #f8f9fa;
      border-radius: 0.75rem;
      padding: 1.5rem;
      
      h4 {
        margin-top: 0;
      }
      
      p {
        font-size: 0.95rem;
      }
      
      .code-example {
        margin-bottom: 0;
      }
    }
  }
  
  .tip-list {
    .tip {
      display: flex;
      margin-bottom: 2rem;
      
      .tip-icon {
        font-size: 1.5rem;
        margin-right: 1rem;
        flex-shrink: 0;
        margin-top: 0.25rem;
      }
      
      .tip-content {
        h4 {
          margin-top: 0;
          margin-bottom: 0.75rem;
        }
        
        p {
          margin-bottom: 0;
        }
      }
    }
  }
  
  .accordion {
    margin-top: 1.5rem;
    
    .accordion-item {
      border: 1px solid #ebeef5;
      border-radius: 0.5rem;
      margin-bottom: 1rem;
      overflow: hidden;
      
      .accordion-header {
        padding: 1.25rem;
        background: #f8f9fa;
        font-weight: 500;
        cursor: pointer;
        user-select: none;
        position: relative;
        
        &:after {
          content: "+";
          position: absolute;
          right: 1.25rem;
          font-size: 1.25rem;
          transition: transform 0.25s;
        }
      }
      
      .accordion-content {
        padding: 0 1.25rem;
        max-height: 0;
        overflow: hidden;
        transition: all 0.25s ease-in-out;
      }
      
      &.active {
        .accordion-header:after {
          transform: rotate(45deg);
        }
        
        .accordion-content {
          padding: 1.25rem;
          max-height: 500px;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .documentation {
    .doc-layout {
      grid-template-columns: 1fr;
    }
    
    .doc-sidebar {
      position: static;
      margin-bottom: 2rem;
      padding-right: 0;
      
      nav {
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          
          li {
            margin-bottom: 0;
            
            a {
              padding: 0.5rem 0.75rem;
              font-size: 0.9rem;
            }
          }
        }
      }
    }
    
    .model-comparison {
      grid-template-columns: 1fr;
    }
  }
}

@media (max-width: 768px) {
  .documentation {
    padding: 1.5rem 0 3rem;
    
    .doc-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
    
    .doc-card {
      padding: 1.5rem;
    }
    
    .step-list .step {
      flex-direction: column;
      
      .step-number {
        margin-bottom: 1rem;
      }
    }
    
    .tip-list .tip {
      flex-direction: column;
      
      .tip-icon {
        margin-bottom: 0.5rem;
      }
    }
  }
}
</style> 