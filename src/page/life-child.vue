<template>
  <div>
    child
    {{text}}
  </div>
</template>

<script>
export default {
  beforeCreate () {
    console.log('c-beforeCreate')
  },

  props: {
    text: {
      type: String,
      default: () => ''
    }
  },

  data () {
    return {
      //
    }
  },

  created () {
    console.log('c-created')
  },

  beforeMount () {
    console.log('c-beforeMount')
  },

  mounted () {
    console.log('c-mounted')
  },

  beforeUpdate () {
    console.log('c-beforeUpdate')
  },

  updated () {
    console.log('c-updated')
  },

  beforeDestroy () {
    console.log('c-beforeDestroy')
  },

  destroyed () {
    console.log('c-destroyed')
  },

  watch: {
    text (val, oldVal) {
      console.log('change------------')
    }
  }
}
</script>

