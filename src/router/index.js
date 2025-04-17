import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/examples',
    name: 'Examples',
    component: () => import('@/views/Examples.vue')
  },
  {
    path: '/documentation',
    name: 'Documentation',
    component: () => import('@/views/Documentation.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
  },
  {
    path: '/chatUML',
    name: 'ChatUML',
    component: () => import('@/views/ChatUML.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 