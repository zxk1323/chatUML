<template>
  <footer class="nav-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ t('footer.product') }}</h3>
          <ul>
            <li><router-link to="/features">{{ t('footer.features') }}</router-link></li>
            <li><router-link to="/pricing">{{ t('footer.pricing') }}</router-link></li>
            <li><router-link to="/examples">{{ t('footer.examples') }}</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>{{ t('footer.resources') }}</h3>
          <ul>
            <li><router-link to="/documentation">{{ t('footer.documentation') }}</router-link></li>
            <li><router-link to="/blog">{{ t('footer.blog') }}</router-link></li>
            <li><router-link to="/support">{{ t('footer.support') }}</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>{{ t('footer.company') }}</h3>
          <ul>
            <li><router-link to="/about">{{ t('footer.about') }}</router-link></li>
            <li><router-link to="/contact">{{ t('footer.contact') }}</router-link></li>
            <li><router-link to="/privacy">{{ t('footer.privacy') }}</router-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} ChatUML. {{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style lang="scss" scoped>
.nav-footer {
  background: #f3f4f6;
  padding: 4rem 0 2rem;
  margin-top: auto;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }

  .footer-section {
    h3 {
      color: #111827;
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin-bottom: 0.5rem;

        a {
          color: #4b5563;
          text-decoration: none;
          font-size: 0.95rem;

          &:hover {
            color: #4f46e5;
          }
        }
      }
    }
  }

  .footer-bottom {
    border-top: 1px solid #e5e7eb;
    padding-top: 2rem;
    text-align: center;
    color: #6b7280;
    font-size: 0.9rem;
  }
}
</style> 