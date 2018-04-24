<template>
  <div>
    <p>mine</p>
    <input type="text" v-model="iptVal">
    {{test}}
    <Child :foo.sync="test" :value="iptVal" :xxx="ss"></Child>
  </div>
</template>

<script>
const s = Symbol()

import Child from './child.vue'
export default {
  provide: {
    testx: 'bar'
  },

  data () {
    return {
      iptVal: '1',
      test: true,
      ss: 'sadsad'
    }
  },

  created () {

  },

  methods: {
    say () {
      console.log(1)
    }
  },

  components: {
    Child
  },

  watch: {
    iptVal: {
      handler: 'say',
      immediate: true
    }
  }
}
</script>
