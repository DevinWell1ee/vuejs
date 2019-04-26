/**
 * 使用：
 * this.$eventBus.$on('test', (...args) => {
 *   console.log(...args)
 * }, this)
 *
 * this.$eventBus.$emit('test', { test: 1 })
 */

class EventBus {
  constructor (vue) {
    if (!this.handles) {
      /**
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
       */
      Object.defineProperty(this, 'handles', {
        value: {},
        enumerable: false
      })
    }

    this.Vue = vue

    /**
     * _uid和event name的映射
     * 在Vue init 时候，每个vue实例都有一个_uid唯一标识
     */
    this.eventMapUid = {}
  }

  setEventMapUid (uid, eventName) {
    /**
     * 把每个_uid订阅的事件名字push到各自uid所属的数组里
     */
    if (!this.eventMapUid[uid]) this.eventMapUid[uid] = []

    this.eventMapUid[uid].push(eventName)
  }

  $on (eventName, callback, vm) {
    /**
     * vm是在组件内部使用时组件当前的this用于取_uid
     */
    if (!this.handles[eventName]) this.handles[eventName] = []

    this.handles[eventName].push(callback)

    if (vm instanceof this.Vue) this.setEventMapUid(vm._uid, eventName)
  }

  $emit () {
    let [eventName, ...params] = [...arguments]

    if (this.handles[eventName]) {
      let len = this.handles[eventName].length

      for (let i = 0; i < len; i++) {
        this.handles[eventName][i](...params)
      }
    }
  }

  $offVmEvent (uid) {
    let currentEvents = this.eventMapUid[uid] || []

    if (currentEvents.length < 1) return

    currentEvents.forEach(event => {
      this.$off(event)
    })
  }

  $off (eventName) {
    delete this.handles[eventName]
  }
}

export default EventBus
