import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '@/components/page/ShouYe'
import Login from '@/components/page/Login'
import PersoNal from '@/components/page/PersoNal'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ShouYe',
      component: ShouYe
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/PersoNal',
      name: 'PersoNal',
      component: PersoNal
    }
  ]
})
