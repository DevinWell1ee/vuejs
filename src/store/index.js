import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import mutations from './mutations'
import actions from './action'

const state = {
  count: 1
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
