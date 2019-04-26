/**
 * Action 可以包含任意异步操作。
 * mutation是同步任务
 * commit mutations
 * dispatch actions
 */
import Vue from 'vue'
import Vuex from 'vuex'

import VuexConnector from '@xunlei/vuex-connector';

Vue.use(Vuex)

import mutations from './mutations'
import actions from './action'

const state = {
  count: 1,
  comments: [
    {body: 'sada', author: 'sadadadadasda', id: '111'}
  ]
}

const store =  new Vuex.Store({
  state,
  actions,
  mutations
})

export default store;

export const connector = new VuexConnector(store);
