<script setup>
import NavHeader from '@/components/NavHeader.vue'
import NavFooter from '@/components/NavFooter.vue'
import { SpeedInsights } from "@vercel/speed-insights/next"
</script>

<template>
  <div class="app">
    <nav-header />
    <router-view />
    <nav-footer />
  </div>
</template>

<style lang="scss">
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
