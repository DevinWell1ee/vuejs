import Vue from 'vue'

Vue.directive('uname', {
  bind () {
    // console.log(1)
  },
  inserted () {
    // console.log(2)
  },
  update (el, binding, vnode) {
    if (!/\w{6,20}/.test(binding.value)) {
      console.log('不合法')
    }
    // console.log(3)
  },
  componentUpdated () {
    // console.log(4)
  },
  unbind () {
    // console.log(5)
  }
})
