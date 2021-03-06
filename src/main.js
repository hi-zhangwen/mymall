import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import toast from 'components/common/toast'

Vue.config.productionTip = false
//将vue实例赋值到$bus中
Vue.prototype.$bus = new Vue()
//安装toast插件
Vue.use(toast)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
