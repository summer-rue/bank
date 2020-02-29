import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '@/components/HelloWorld'
import ddd from '@/components/ddd'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: ShouYe,
      meta: {
        requireAuth: true   // 这个meta用于路由前置守卫的权限判定功能
      }
    },

    {
      path: '/ddd',
      component: ddd,
      meta: {
        requireAuth: true   // 这个meta用于路由前置守卫的权限判定功能
      }
    }
  ]
})