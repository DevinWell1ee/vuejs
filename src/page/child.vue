<template>
  <div>
    <div>child</div>
    <button @click="changeFoo">change foo</button>
    <SubChild v-bind="$attrs"></SubChild>
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


  inheritAttrs: false,

  created () {
    console.log(this)
    console.log(this.$parent)
    console.log(this.lala)
  },

  methods: {
    changeFoo () {
      this.$emit('update:foo', false)
    }
  },

  components: {
    SubChild
  }
}
</script>

