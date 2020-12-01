import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css';
import 'lib-flexible/flexible.js'
import './mock/mock-server'
Vue.use(Vant)
// 把一些提示给关闭掉
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
