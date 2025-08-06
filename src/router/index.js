import { createRouter, createWebHistory } from 'vue-router'
import th02627 from '../layout/th02627.vue'
import pages from '../layout/pages.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: th02627
  },
  {
    path: '/pages',
    name: 'pages',
    component: pages
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
