<template>
  <header class="nav-header">
    <div class="container">
      <div class="logo">
        <router-link to="/">
          <span class="main-title">ChatUML</span>
          <span class="subtitle">AI-Powered UML Diagram Generator</span>
        </router-link>
      </div>
      <nav class="nav-menu">
        <router-link to="/chatUML">{{ t('nav.goToApp') }}</router-link>
        <router-link to="/examples">{{ t('nav.examples') }}</router-link>
        <router-link to="/documentation">{{ t('nav.documentation') }}</router-link>
        <router-link to="/settings">{{ t('nav.settings') }}</router-link>
        <el-dropdown @command="handleLanguageChange" class="language-dropdown">
          <el-button class="language-button">
            <span class="globe-icon">🌎</span>
            {{ currentLanguage }}
            <el-icon><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="en">English</el-dropdown-item>
              <el-dropdown-item command="zh">中文</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'

const { t, locale } = useI18n()
const router = useRouter()

const currentLanguage = computed(() => locale.value === 'en' ? 'English' : '中文')

const handleLanguageChange = (lang) => {
  locale.value = lang
}

</script>

<style lang="scss" scoped>
.nav-header {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    
    a {
      color: #4f46e5;
      text-decoration: none;
      display: flex;
      flex-direction: column;
    }
    
    .main-title {
      font-size: 1.5rem;
      line-height: 1.2;
    }
    
    .subtitle {
      font-size: 0.7rem;
      font-weight: normal;
      color: #6b7280;
    }
  }

  .nav-menu {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      color: #374151;
      text-decoration: none;
      font-weight: 500;
      
      &:hover {
        color: #4f46e5;
      }

      &.router-link-active {
        color: #4f46e5;
      }

      &.try-button {
        background: var(--primary-color);
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        transition: all 0.2s;

        &:hover {
          background: var(--secondary-color);
          color: white;
        }
      }
    }
    
    .language-dropdown {
      .language-button {
        display: flex;
        align-items: center;
        font-weight: 500;
        
        .globe-icon {
          margin-right: 0.5rem;
          font-size: 1.1rem;
        }
        
        .el-icon {
          margin-left: 0.25rem;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .nav-header {
    .nav-menu {
      gap: 1rem;
      
      a:not(.try-button) {
        display: none;
      }
    }
  }
}
</style> 