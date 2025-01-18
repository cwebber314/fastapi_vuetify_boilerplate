
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// This uses the unplugin-vue-router for the auto router
// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import { useStore } from '../stores/store';

// Instead of writing the routes manually you can generate these routes.
// the auto-routes are used out of the box, but I can't figure out how to 
// customize them for the auth
// import { routes } from 'vue-router/auto-routes'

import index from '../pages/index.vue'
import counter from '../pages/counter.vue'
import logout from '../pages/logout.vue'
import login from '../pages/login.vue'
import protectedPage from '../pages/protectedPage.vue'
import protectedRedirect from '../pages/protectedRedirect.vue'

const routes = [
  { path: '/index', component: index },
  { path: '/counter', component: counter },
  { path: '/login', component: login },
  { path: '/logout', component: logout },
  { path: '/protected-page', component: protectedPage },
  { path: '/protected-redirect',  component: protectedRedirect,
    meta: {requiresAuth: true},
   },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// To use pinia in router https://pinia.vuejs.org/cookbook/migration-vuex.html#Usage-Outside-Components
router.beforeEach((to, from, next) => {
  const store = useStore()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.isAuthenticated) {
      next({ path: '/login' })
    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
