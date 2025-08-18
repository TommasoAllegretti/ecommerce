import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/HomePage.vue'),
      meta: { requiresAuth: true },
    },
    { name: 'login', path: '/login', component: () => import('@/pages/LoginPage.vue') },
    {
      name: 'not_found',
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/NotFound.vue'),
    },
  ],
})

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      getAuth(),
      (user) => {
        unsubscribe()
        resolve(user)
      },
      reject,
    )
  })
}

router.beforeEach(async (to, _from, next) => {
  if (to.meta.requiresAuth) {
    const user = await getCurrentUser()
    if (user) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router
