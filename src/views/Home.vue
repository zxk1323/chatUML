<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <h1>{{ t('hero.title') }}</h1>
        <p class="subtitle">{{ t('hero.subtitle') }}</p>
        <div class="cta-buttons">
          <el-button type="primary" size="large" @click="goToApp">
            {{ t('hero.tryNow') }}
          </el-button>
          <el-button size="large">
            {{ t('hero.learnMore') }}
          </el-button>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>{{ t('features.title') }}</h2>
        <div class="features-grid">
          <div class="feature-card">
            <el-icon><magic-stick /></el-icon>
            <h3>{{ t('features.aiPowered.title') }}</h3>
            <p>{{ t('features.aiPowered.description') }}</p>
          </div>
          <div class="feature-card">
            <el-icon><share /></el-icon>
            <h3>{{ t('features.realTime.title') }}</h3>
            <p>{{ t('features.realTime.description') }}</p>
          </div>
          <div class="feature-card">
            <el-icon><download /></el-icon>
            <h3>{{ t('features.export.title') }}</h3>
            <p>{{ t('features.export.description') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { MagicStick, Share, Download } from '@element-plus/icons-vue'

const { t } = useI18n()
const router = useRouter()

const goToApp = () => {
  router.push('/chatUML')
}
</script>

<style lang="scss" scoped>
.home {
  .hero {
    background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
    color: white;
    padding: 6rem 0;
    text-align: center;

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    h1 {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }

    .subtitle {
      font-size: 1.25rem;
      max-width: 800px;
      margin: 0 auto 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
  }

  .features {
    padding: 6rem 0;
    background: #fff;

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    h2 {
      text-align: center;
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 3rem;
      color: #111827;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      padding: 2rem;
      background: #f9fafb;
      border-radius: 0.5rem;
      text-align: center;

      .el-icon {
        font-size: 2.5rem;
        color: #4f46e5;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #111827;
      }

      p {
        color: #6b7280;
        line-height: 1.6;
      }
    }
  }
}

@media (max-width: 768px) {
  .home {
    .hero {
      padding: 4rem 0;

      h1 {
        font-size: 2.5rem;
      }

      .subtitle {
        font-size: 1.1rem;
      }
    }

    .features {
      padding: 4rem 0;

      h2 {
        font-size: 2rem;
      }
    }
  }
}
</style> 