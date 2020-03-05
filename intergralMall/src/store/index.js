import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: '',
  fullPath: '/', // 存放路由前置守卫判断权限中要去的页面路由地址
  TopTitle: '宝马会'
}

const mutations = {
  changeFullPath (state, msg) { // 根据传入的路由信息来设置登陆后要去的页面路由
    state.fullPath = msg
  },
  changeTitle (state, msg) { // 改变title
    state.TopTitle = msg
  }
}

const store = new Vuex.Store({
  state,
  mutations
})

export default store
