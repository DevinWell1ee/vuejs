import Alert from './alert/alert.js'
import EventBus from './event-bus/index.js'

const install = function(Vue) {
    //添加全局API
    Vue.prototype.$alert = Alert

    Vue.prototype.$eventBus = new EventBus(Vue)

    Vue.mixin({
        beforeDestroy () {
          /**
           * 拦截beforeDestroy钩子自动销毁自身所有订阅的事件
           */
          this.$eventBus.$offVmEvent(this._uid)
        }
      })
}

export default install

