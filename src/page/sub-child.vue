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
  },

  inheritAttrs: false,

  mounted () {
    this.$emit('test1')
  }
}
</script>
