<template>
  <div class="examples">
    <div class="container">
      <h1>Examples</h1>
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
const examples = [
  {
    id: 1,
    title: 'Class Diagram',
    description: 'Object-oriented design visualization with UML class diagrams',
    image: '/examples/class-diagram.png'
  },
  {
    id: 2,
    title: 'Sequence Diagram',
    description: 'Interaction flow between objects in a system',
    image: '/examples/sequence-diagram.png'
  },
  {
    id: 3,
    title: 'Activity Diagram',
    description: 'Business process and workflow visualization',
    image: '/examples/activity-diagram.png'
  }
]
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