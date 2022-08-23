import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible'
import '@/styles/global.styl'
import '@/components/index.js'

Vue.config.productionTip = false

// import VConsole from 'vconsole'
// new VConsole()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
