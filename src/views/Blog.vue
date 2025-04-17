<template>
  <div class="blog">
    <div class="container">
      <h1>Blog</h1>
      <div class="blog-grid">
        <article v-for="post in blogPosts" :key="post.id" class="blog-card">
          <img :src="post.image" :alt="post.title">
          <div class="blog-content">
            <div class="blog-meta">
              <span class="date">{{ post.date }}</span>
              <span class="category">{{ post.category }}</span>
            </div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.excerpt }}</p>
            <el-button type="primary" text>
              Read More
              <el-icon><arrow-right /></el-icon>
            </el-button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'

const blogPosts = [
  {
    id: 1,
    title: 'Introducing AI-Powered UML Generation',
    excerpt: 'Learn how our AI technology transforms your text descriptions into professional UML diagrams.',
    date: 'Mar 15, 2024',
    category: 'Product Updates',
    image: '/blog/ai-uml.png'
  },
  {
    id: 2,
    title: 'Best Practices for UML Diagrams',
    excerpt: 'Discover the essential guidelines for creating clear and effective UML diagrams.',
    date: 'Mar 10, 2024',
    category: 'Tips & Tricks',
    image: '/blog/best-practices.png'
  },
  {
    id: 3,
    title: 'Real-time Collaboration Features',
    excerpt: 'Explore our new real-time collaboration features for team diagramming.',
    date: 'Mar 5, 2024',
    category: 'Features',
    image: '/blog/collaboration.png'
  }
]
</script>

<style lang="scss" scoped>
.blog {
  padding: 4rem 0;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--text-color);
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .blog-card {
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-4px);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .blog-content {
      padding: 1.5rem;

      .blog-meta {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: var(--text-color-light);

        .category {
          color: var(--primary-color);
        }
      }

      h2 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
        color: var(--text-color);
        line-height: 1.4;
      }

      p {
        color: var(--text-color-light);
        margin-bottom: 1.5rem;
        line-height: 1.6;
      }
    }
  }
}

@media (max-width: 768px) {
  .blog {
    padding: 2rem 0;

    h1 {
      font-size: 2rem;
    }
  }
}
</style> 