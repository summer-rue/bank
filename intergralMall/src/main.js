// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MetaInfo from 'vue-meta-info'
import store from './store'
import { Icon, Tabbar, TabbarItem, Swipe, SwipeItem, NoticeBar, Tab, Tabs, Toast, Notify, Lazyload, Form, Field } from 'vant'
import 'vant/lib/index.css'
import '../src/assets/css/base.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
// import
Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NoticeBar)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Toast)
Vue.use(Notify)
Vue.use(Form)
Vue.use(Field)
Vue.use(MetaInfo)
Vue.use(VueAwesomeSwiper)

Vue.use(Lazyload)// TDK设置

Vue.config.productionTip = false

// 路由前置守卫，判断登陆权限
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) { // 要去的页面是否需要权限
    store.commit('changeFullPath', to.path) // vuex中设置一个共享参数，存放原来要去的路由地址，登陆成功后返回原本要去的路由
    if (localStorage.getItem('token')) { // 是否已登陆
      next()
    } else {
      // 多一步，避免死循环
      if (to.path === '/Login') {
        next()
        return false
      } else {
        next({
          path: '/Login'
        })
      }
    }
  } else {
    next()
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
