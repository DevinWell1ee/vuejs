<template>
  <div>
    <p>mine</p>

    <input type="text" v-model="iptVal">

    {{test}}

    <Child :foo.sync="test" :value="iptVal" :xxx="ss" @test1="test1"></Child>

    <Comment></Comment>
  </div>
</template>

<script>
const s = Symbol()

import Child from './child.vue'
import Comment from '@/components/connectCommentListContainer'
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
      console.log('xxxx')
    },

    test1 () {
      console.log('test1')
      console.log('xxx111')
    }
  },

  components: {
    Child,
    Comment
  },

  watch: {
    iptVal: {
      handler: 'say',
      immediate: true
    }
  }
}
</script>
