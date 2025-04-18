<template>
  <div class="examples">
    <div class="container">
      <h1>{{ t('documentation.diagramTypesTitle') }}</h1>
      <div class="examples-grid">
        <div class="example-card" v-for="example in examples" :key="example.id">
          <img :src="example.image" :alt="example.title">
          <h3>{{ example.title }}</h3>
          <p>{{ example.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

// 导入图片资源
import classEn from '@/assets/class-diagram-en.png'
import classZh from '@/assets/class-diagram-zh.png'
import sequenceEn from '@/assets/sequence-diagram-en.png'
import sequenceZh from '@/assets/sequence-diagram-zh.png'
import mindMapEn from '@/assets/mind-map-en.png'
import mindMapZh from '@/assets/mind-map-zh.png'

const { t, locale } = useI18n()

const examples = computed(() => {
  // 根据当前语言选择对应的图片
  const isZh = locale.value === 'zh'
  
  return [
    {
      id: 1,
      title: t('documentation.classTitle'),
      description: t('documentation.classDesc'),
      image: isZh ? classZh : classEn
    },
    {
      id: 2,
      title: t('documentation.sequenceTitle'),
      description: t('documentation.sequenceDesc'),
      image: isZh ? sequenceZh : sequenceEn
    },
    {
      id: 3,
      title: t('documentation.mindMapTitle'),
      description: t('documentation.mindMapDesc'),
      image: isZh ? mindMapZh : mindMapEn
    }
  ]
})
</script>

<style lang="scss" scoped>
.examples {
  padding: 4rem 0;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--text-color);
  }

  .examples-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .example-card {
    background: var(--background-color-light);
    border-radius: 0.5rem;
    overflow: hidden;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-4px);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    h3 {
      padding: 1rem;
      margin: 0;
      color: var(--text-color);
    }

    p {
      padding: 0 1rem 1rem;
      color: var(--text-color-light);
    }
  }
}

@media (max-width: 768px) {
  .examples {
    padding: 2rem 0;

    h1 {
      font-size: 2rem;
    }
  }
}
</style> 