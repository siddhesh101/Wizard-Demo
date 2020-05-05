import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import { store } from './store/store.js'
import i18n from './i18n'

Vue.config.productionTip = false

var vm = new Vue({
  store,
  i18n,
  render: h => h(App)
})
    vm.$mount('#app')

