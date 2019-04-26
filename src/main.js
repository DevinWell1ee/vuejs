import Vue from 'vue'

import App from './App'
import router from './router/index'
import store from './store/index'

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
