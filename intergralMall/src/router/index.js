import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '@/components/page/ShouYe'
import YouHui from '@/components/page/YouHui'
import PersoNal from '@/components/page/PersoNal'
import Login from '@/components/page/Login'
import ChouJiang from '@/components/page/ChouJiang'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    // 首页
    {
      path: '/',
      name: 'ShouYe',
      component: ShouYe
    },

    // 优惠
    {
      path: '/YouHui',
      name: 'YouHui',
      component: YouHui
    },

    // 抽奖
    {
      path: '/ChouJiang',
      name: 'ChouJiang',
      component: ChouJiang
    },
    // 登陆
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },

    // 个人中心
    {
      path: '/PersoNal',
      name: 'PersoNal',
      component: PersoNal,
      meta: { // 路由元信息
        requireAuth: true // 路由守卫权限判断信息
      }
    }
  ]
})
