<script>
/**
 * 使用：
 *  <nb-throttle :time="1000" events="click">
 *    <button @click="click">click</button>
 *  </nb-throttle>
 */
import _ from 'lodash'
import { throttle } from './util'

export default {
  name: 'nb-throttle',

  /**
   * 使用其来实现一个抽象组件
   */
  abstract: true,

  props: {
    time: {
      type: Number,
      default: () => 50
    },

    events: {
      type: String,
      default: () => ''
    }
  },

  data () {
    return {
      originMap: {},
      throttledMap: {}
    }
  },

  computed: {
    eventKeys () {
      if (_.isEmpty(this.events)) return []

      return _.split(this.events, ',')
    }
  },

  render () {
    /**
     * 通过slot拿到child
     */
    const vnode = this.$slots.default[0]
    console.log(vnode)
    /**
     * 参考：https://cn.vuejs.org/v2/guide/render-function.html
     * {
     *  ...
     *  data: {
     *    on: {
     *      click: fnnc
     *    }
     *  }
     * }
     */

    _.forEach(this.eventKeys, key => {
      const targetFn = vnode.data.on[key]

      /**
       * 以防事件内容改变，但是事件类型未变，所以用一个originMap来保存func
       */
      if ((targetFn === this.originMap[key]) && this.throttledMap[key]) {
        vnode.data.on[key] = this.throttledMap[key]
      } else if (targetFn) {
        this.originMap[key] = targetFn

        /**
         * 返回的func
         */
        this.throttledMap[key] = throttle(targetFn, this.time, vnode)

        /**
         * 将事件替换为throttle事件
         */
        vnode.data.on[key] = this.throttledMap[key]
      }
    })

    return vnode
  }
}
</script>
