<template>
  <div>
    <SubChild v-bind="$attrs" v-on="$listeners"></SubChild>
    <!-- 还可以v-bind="$props" -->
    <hr>
    <br>
    <br>

    <input type="text" v-model="iptValue">
    <button @click="changeFoo">change foo</button>

    <hr>
    <br>
    <br>
    {{lala}}
  </div>
</template>

<script>
var mixin = {
  data () {
    return {
      lala: 11
    }
  }
}

import SubChild from './sub-child.vue'

export default {
  mixins: [mixin],

  props: ['foo'],

  /**
   * 在Vue2.4.0,可以在组件定义中添加inheritAttrs：false
   * 组件将不会把未被注册的props呈现为普通的HTML属性
   * 但是在组件里我们可以通过其$attrs可以获取到没有使用的注册属性
   */
  inheritAttrs: false,

  created () {
   console.log(this.$attrs)
  },

  computed: {
    iptValue: {
      get: function () {
        return this.foo
      },

      set: function (val) {
        this.$emit('update:foo', val)
      }
    }
  },

  methods: {
    changeFoo () {
      this.$emit('update:foo', 1)
    }
  },

  components: {
    SubChild
  }
}
</script>

