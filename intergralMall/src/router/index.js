import Vue from 'vue'
import Router from 'vue-router'
import ShouYe from '@/components/page/ShouYe'
import YouHui from '@/components/page/YouHui'
import PersoNal from '@/components/page/PersoNal'
import Login from '@/components/page/Login'
import ChouJiang from '@/components/page/ChouJiang'
import Nba from '@/components/page/NBA'
import ConverSion from '@/components/page/conversion'
import Search from '@/components/page/search'
import Vip from '@/components/page/vip'
import GuanWang from '@/components/page/GuanWang'
import MingXi from '@/components/page/MingXi'
import JiLu from '@/components/page/JiLu'
import GuanYujifen from '@/components/page/GuanYujifen'
import YiWen from '@/components/page/YiWen'
import GuiZe from '@/components/page/GuiZe'

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

    // 商品兑换详情页
    {
      path: '/converSion',
      name: 'conversion',
      component: ConverSion
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

    // NBA抽奖
    {
      path: '/Nba',
      name: 'Nba',
      component: Nba
    },

    // 官网
    {
      path: '/guanwang',
      name: 'GuanWang',
      component: GuanWang
    },

    // vip
    {
      path: '/vip',
      name: 'vip',
      component: Vip
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
    },

    // 搜索
    {
      path: '/search',
      name: 'search',
      component: Search
    },

    // 明细
    {
      path: '/mingxi',
      name: 'Mingxi',
      component: MingXi
    },

    // 兑换记录
    {
      path: '/duihuanjilu',
      name: 'JiLu',
      component: JiLu
    },

    // 关于积分
    {
      path: '/guanyujifen',
      name: 'GuanYujifen',
      component: GuanYujifen
    },

    // 常见疑问
    {
      path: '/yiwen',
      name: 'YiWen',
      component: YiWen
    },

    // 规则与条款
    {
      path: '/guize',
      name: 'GuiZe',
      component: GuiZe
    }
  ]
})
