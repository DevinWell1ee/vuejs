<template>
  <div>
    subchild
  </div>
</template>

<script>
export default {
  inject: ['testx'],

  created () {
    console.log(this.testx)
    console.log(this.$attrs)
  },

  inheritAttrs: false,

  mounted () {
    this.$emit('test1')
  }
}
</script>
