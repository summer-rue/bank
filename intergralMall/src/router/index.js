import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '@/components/page/ShouYe'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ShouYe',
      component: ShouYe
    }
  ]
})
