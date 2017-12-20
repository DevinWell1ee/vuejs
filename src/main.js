import Vue from 'vue'

import App from './App'
import router from './router/index'
import store from './store/index'

import './assets/style.css'

import './filters/index.js'
import './directives/validate.js'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
