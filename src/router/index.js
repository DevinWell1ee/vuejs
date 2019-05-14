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
        path: 'life',
        component: r => require.ensure([], () => r(require('../page/life')), 'life')
      },
      {
        path: 'render',
        component: r => require.ensure([], () => r(require('../page/render')), 'render')
      },
      {
        path: 'jsx',
        component: () => import('../page/jsx')
      }
    ]
  }
]

let router = new VueRouter({
  routes: routes,
  mode: 'history'
})

export default router
