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
                  <span class="section-icon-small">{{ section.icon }}</span>
                  {{ section.title }}
                </a>
              </li>
            </ul>
          </nav>
          
          <div class="contact-box">
            <h4>{{ t('documentation.needMoreHelp') }}</h4>
            <a href="mailto:xinke1323@gmail.com">xinke1323@gmail.com</a>
          </div>
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
        <p>
          {{ t('documentation.needMoreHelp') }} 
          <a href="mailto:xinke1323@gmail.com">{{ t('documentation.contactUs') }}</a>
        </p>
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
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <p>${t('documentation.changeModelStep2')}</p>
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
            <h4>${t('documentation.mindMapTitle')}</h4>
            <p>${t('documentation.mindMapDesc')}</p>
            <div class="code-example">
              <code>${t('documentation.mindMapPrompt')}</code>
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
  padding: 3rem 0 5rem;
  background-color: #f9fafc;
  min-height: calc(100vh - 64px);

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .doc-title {
    text-align: center;
    font-size: 2.75rem;
    margin-bottom: 3rem;
    color: var(--text-color, #303133);
    font-weight: 700;
    position: relative;
    
    &:after {
      content: '';
      display: block;
      width: 80px;
      height: 4px;
      background: var(--primary-color, #409eff);
      margin: 0.75rem auto 0;
      border-radius: 2px;
    }
  }

  .doc-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 3rem;
  }

  .doc-sidebar {
    position: sticky;
    top: 80px;
    height: fit-content;
    
    nav {
      background: white;
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
      margin-bottom: 1.5rem;
      
      ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          margin-bottom: 0.75rem;

          a {
            display: flex;
            align-items: center;
            padding: 1rem 1.25rem;
            color: var(--text-color, #303133);
            text-decoration: none;
            border-radius: 0.75rem;
            transition: all 0.3s;
            font-size: 1rem;

            &:hover {
              color: var(--primary-color, #409eff);
              background: rgba(64, 158, 255, 0.08);
            }

            &.active {
              color: var(--primary-color, #409eff);
              background: rgba(64, 158, 255, 0.1);
              font-weight: 600;
              box-shadow: 0 2px 8px rgba(64, 158, 255, 0.15);
            }
            
            .section-icon-small {
              margin-right: 0.75rem;
              font-size: 1.2rem;
            }
          }
        }
      }
    }
    
    .contact-box {
      background: white;
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
      text-align: center;
      
      h4 {
        font-size: 1.1rem;
        margin-top: 0;
        margin-bottom: 0.75rem;
        color: var(--text-color, #303133);
      }
      
      a {
        color: var(--primary-color, #409eff);
        text-decoration: none;
        font-weight: 500;
        font-size: 1.05rem;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .doc-content {
    section {
      margin-bottom: 4rem;
      scroll-margin-top: 80px;

      .section-header {
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
        
        .section-icon {
          font-size: 2.25rem;
          margin-right: 1.25rem;
          background: white;
          width: 3.5rem;
          height: 3.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 1rem;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
        }
        
        h2 {
          font-size: 1.85rem;
          font-weight: 700;
          color: var(--text-color, #303133);
          margin: 0;
        }
      }
    }
  }
  
  .doc-footer {
    text-align: center;
    margin-top: 5rem;
    padding-top: 2.5rem;
    color: var(--text-color-light, #909399);
    border-top: 1px solid rgba(235, 238, 245, 0.8);
    
    a {
      color: var(--primary-color, #409eff);
      text-decoration: none;
      font-weight: 500;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .doc-card {
    background: white;
    border-radius: 1.25rem;
    padding: 2.5rem;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
    }
    
    h3 {
      font-size: 1.75rem;
      margin-top: 0;
      margin-bottom: 1.5rem;
      color: var(--text-color, #303133);
      font-weight: 700;
      position: relative;
      padding-bottom: 0.75rem;
      
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50px;
        height: 3px;
        background: var(--primary-color, #409eff);
        border-radius: 2px;
      }
    }
    
    h4 {
      font-size: 1.35rem;
      margin: 2rem 0 1rem;
      color: var(--text-color, #303133);
      font-weight: 600;
    }
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.7;
      color: var(--text-color-light, #606266);
      font-size: 1.05rem;
    }
  }
  
  .step-list {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 2.5rem;
    
    .step {
      display: flex;
      position: relative;
      
      &:not(:last-child):after {
        content: '';
        position: absolute;
        top: 3.5rem;
        left: 1.25rem;
        width: 2px;
        height: calc(100% + 2.5rem);
        background: linear-gradient(to bottom, var(--primary-color, #409eff) 50%, transparent);
        z-index: 0;
      }
      
      .step-number {
        width: 2.75rem;
        height: 2.75rem;
        background: var(--primary-color, #409eff);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 1.25rem;
        flex-shrink: 0;
        margin-right: 1.5rem;
        box-shadow: 0 6px 15px rgba(64, 158, 255, 0.3);
        margin-top: 0.25rem;
        z-index: 1;
      }
      
      .step-content {
        background: #f9fafc;
        border-radius: 1rem;
        padding: 1.5rem;
        border: 1px solid rgba(235, 238, 245, 0.5);
        width: 100%;
        
        h4 {
          margin-top: 0;
          margin-bottom: 1rem;
          color: var(--primary-color, #409eff);
        }
        
        p {
          margin-bottom: 1rem;
        }
      }
    }
  }
  
  .doc-image {
    width: 100%;
    border-radius: 0.75rem;
    border: 1px solid #ebeef5;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    margin: 1.5rem 0;
    transition: transform 0.3s;
    
    &:hover {
      transform: scale(1.02);
    }
    
    &.small {
      max-width: 300px;
    }
  }
  
  .code-example {
    background: #f8fafd;
    border: 1px solid #ebeef5;
    border-radius: 0.75rem;
    padding: 1.25rem 1.5rem;
    margin: 1.5rem 0;
    overflow-x: auto;
    position: relative;
    
    &:before {
      content: 'Example';
      position: absolute;
      top: -10px;
      left: 15px;
      background: var(--primary-color, #409eff);
      color: white;
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-weight: 500;
    }
    
    code {
      font-family: 'Courier New', monospace;
      color: #476582;
      font-size: 0.95rem;
    }
  }
  
  .info-box {
    display: flex;
    background: rgba(64, 158, 255, 0.08);
    border-left: 4px solid var(--primary-color, #409eff);
    border-radius: 0.75rem;
    padding: 1.5rem;
    margin: 2rem 0;
    
    .info-icon {
      font-size: 1.75rem;
      margin-right: 1.25rem;
      color: var(--primary-color, #409eff);
    }
    
    .info-content {
      p {
        margin: 0;
        font-size: 1rem;
      }
    }
  }
  
  .model-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.75rem;
    margin-top: 2rem;
    
    .model-card {
      background: white;
      border-radius: 1rem;
      padding: 1.75rem;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s, box-shadow 0.3s;
      border: 1px solid rgba(235, 238, 245, 0.5);
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
      }
      
      .model-header {
        display: flex;
        align-items: center;
        margin-bottom: 1.25rem;
        
        h5 {
          font-size: 1.2rem;
          margin: 0;
          font-weight: 600;
        }
        
        .model-badge {
          font-size: 0.75rem;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-weight: 500;
          margin-right: 0.75rem;
          
          &.free {
            background: linear-gradient(135deg, #67c23a, #5daf34);
            color: white;
            box-shadow: 0 3px 5px rgba(103, 194, 58, 0.3);
          }
          
          &.premium {
            background: linear-gradient(135deg, #a855f7, #9333ea);
            color: white;
            box-shadow: 0 3px 5px rgba(168, 85, 247, 0.3);
          }
        }
      }
      
      .model-features {
        padding-left: 1.25rem;
        margin-bottom: 1.25rem;
        
        li {
          margin-bottom: 0.75rem;
          color: var(--text-color, #303133);
          position: relative;
          
          &:before {
            content: '✓';
            position: absolute;
            left: -1.25rem;
            color: var(--primary-color, #409eff);
            font-weight: bold;
          }
        }
      }
      
      .model-recommendation {
        font-size: 0.95rem;
        font-style: italic;
        margin-bottom: 0;
        color: #606266;
        border-top: 1px solid #ebeef5;
        padding-top: 1rem;
      }
    }
  }
  
  .diagram-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.75rem;
    margin-top: 2rem;
    
    .diagram-type {
      background: white;
      border-radius: 1rem;
      padding: 1.75rem;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s, box-shadow 0.3s;
      border: 1px solid rgba(235, 238, 245, 0.5);
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
      }
      
      h4 {
        margin-top: 0;
        color: var(--primary-color, #409eff);
        font-size: 1.3rem;
      }
      
      p {
        font-size: 1rem;
        line-height: 1.6;
      }
      
      .code-example {
        margin-bottom: 0;
      }
    }
  }
  
  .tip-list {
    margin-top: 2rem;
    
    .tip {
      display: flex;
      margin-bottom: 2.5rem;
      background: white;
      border-radius: 1rem;
      padding: 1.5rem;
      box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
      transition: transform 0.3s, box-shadow 0.3s;
      border: 1px solid rgba(235, 238, 245, 0.5);
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
      }
      
      .tip-icon {
        font-size: 2rem;
        margin-right: 1.5rem;
        flex-shrink: 0;
        width: 3rem;
        height: 3rem;
        background: rgba(64, 158, 255, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .tip-content {
        h4 {
          margin-top: 0;
          margin-bottom: 0.75rem;
          color: var(--primary-color, #409eff);
        }
        
        p {
          margin-bottom: 0;
          line-height: 1.6;
        }
      }
    }
  }
  
  .accordion {
    margin-top: 2rem;
    
    .accordion-item {
      border: 1px solid #ebeef5;
      border-radius: 0.75rem;
      margin-bottom: 1.25rem;
      overflow: hidden;
      background: white;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      transition: box-shadow 0.3s;
      
      &:hover {
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
      }
      
      .accordion-header {
        padding: 1.5rem;
        font-weight: 600;
        cursor: pointer;
        user-select: none;
        position: relative;
        font-size: 1.1rem;
        color: var(--text-color, #303133);
        
        &:after {
          content: "+";
          position: absolute;
          right: 1.5rem;
          font-size: 1.5rem;
          transition: transform 0.3s;
          color: var(--primary-color, #409eff);
        }
      }
      
      .accordion-content {
        padding: 0 1.5rem;
        max-height: 0;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        color: var(--text-color-light, #606266);
        line-height: 1.7;
        font-size: 1.05rem;
      }
      
      &.active {
        .accordion-header {
          color: var(--primary-color, #409eff);
          background: rgba(64, 158, 255, 0.05);
          
          &:after {
            transform: rotate(45deg);
          }
        }
        
        .accordion-content {
          padding: 0 1.5rem 1.5rem;
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
      margin-bottom: 2.5rem;
      
      nav {
        ul {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          
          li {
            margin-bottom: 0;
            flex: 1 1 calc(50% - 0.75rem);
            min-width: 150px;
            
            a {
              padding: 0.75rem 1rem;
              font-size: 0.95rem;
              justify-content: center;
            }
          }
        }
      }
    }
    
    .contact-box {
      margin-top: 1.5rem;
    }
    
    .model-comparison {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
    
    .diagram-grid {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  }
}

@media (max-width: 768px) {
  .documentation {
    padding: 2rem 0 4rem;
    
    .doc-title {
      font-size: 2.25rem;
      margin-bottom: 2.5rem;
      
      &:after {
        width: 60px;
        height: 3px;
      }
    }
    
    .doc-sidebar nav ul li {
      flex: 1 1 100%;
      
      a {
        padding: 0.75rem;
        font-size: 0.9rem;
        
        .section-icon-small {
          margin-right: 0.5rem;
        }
      }
    }
    
    .doc-card {
      padding: 1.75rem;
      
      h3 {
        font-size: 1.5rem;
      }
    }
    
    .doc-content section .section-header {
      margin-bottom: 1.5rem;
      
      .section-icon {
        font-size: 1.75rem;
        width: 3rem;
        height: 3rem;
      }
      
      h2 {
        font-size: 1.6rem;
      }
    }
    
    .step-list .step {
      flex-direction: column;
      
      &:not(:last-child):after {
        display: none;
      }
      
      .step-number {
        margin-bottom: 1rem;
        align-self: center;
      }
    }
    
    .tip-list .tip {
      flex-direction: column;
      align-items: center;
      text-align: center;
      
      .tip-icon {
        margin-right: 0;
        margin-bottom: 1rem;
      }
    }
    
    .model-comparison, .diagram-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style> 