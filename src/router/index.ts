import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name: 'home', path: '/', component: () => import('@/pages/HomePage.vue') },
    { name: 'login', path: '/login', component: () => import('@/pages/LoginPage.vue') },
    {
      name: 'not_found',
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/NotFound.vue'),
    },
  ],
})

export default router
