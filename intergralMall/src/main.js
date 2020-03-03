// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MetaInfo from 'vue-meta-info'
import store from './store'
import { Icon, Tabbar, TabbarItem, Swipe, SwipeItem, NoticeBar, Tab, Tabs } from 'vant'
import 'vant/lib/index.css'
import '../src/assets/css/base.css'

Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NoticeBar)
Vue.use(Tab)
Vue.use(Tabs)

Vue.use(MetaInfo) // TDK设置

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
