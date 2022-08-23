import Vue from 'vue'
import Toast from './Toast.vue'

Vue.component('Container', () => import('@/components/Container.vue'))
Vue.prototype.$toast = Toast