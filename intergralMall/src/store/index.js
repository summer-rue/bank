import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: '',
  fullPath: '/' // 存放路由前置守卫判断权限中要去的页面路由地址
}

const store = new Vuex.Store({
  state
})

export default store
