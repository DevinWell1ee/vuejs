import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '../App'

Vue.use(VueRouter)

let routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
      },
      {
        path: 'home',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
      },
      {
        path: 'mine',
        component: r => require.ensure([], () => r(require('../page/mine')), 'mine')
      },
      {
        path: 'area',
        component: r => require.ensure([], () => r(require('../page/area')), 'area')
      }
    ]
  }
]

let router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export default router
