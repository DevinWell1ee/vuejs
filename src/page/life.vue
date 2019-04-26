<template>
  <div>
    <LifeChild :text="text"></LifeChild>

    <hr>
    <br>
    <br>
    <button @click="changeText">change text</button>
  </div>
</template>

<script>
import LifeChild from './life-child'
export default {
  beforeCreate () {
    console.log('p-beforeCreate')
  },

  data () {
    return {
      text: ''
    }
  },

  created () {
    console.log('p-created')
  },

  beforeMount () {
    console.log('p-beforeMount')
  },

  mounted () {
    this.text = 'aa'
    console.log('p-mounted')
  },

  beforeUpdate () {
    console.log('p-beforeUpdate')
  },

  updated () {
    console.log('p-updated')
  },

  beforeDestroy () {
    console.log('p-beforeDestroy')
  },

  destroyed () {
    console.log('c-destroyed')
  },

  methods: {
    changeText () {
      this.text = 'bb'
    }
  },

  components: {
    LifeChild
  }
}
</script>
