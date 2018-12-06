import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/users',
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/edit/:id',
      component: () => import('@/views/Edit.vue')
    },
    {
      path: '/add',
      component: () => import('@/views/Add.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
