import Vue from 'vue'

import App from './App'
import router from './router/c-router'
import store from './store/c-vuex.js'

import './assets/style.css'

import './assets/rem.js'

import './filters/index.js'
import './directives/validate.js'

import './global.js'

import plugin from './plugins/index.js'
Vue.use(plugin)

// Vue.prototype.$eventBus = new Vue()

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
