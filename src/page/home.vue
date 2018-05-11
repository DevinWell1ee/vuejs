<template>
  <div>
    <h1>{{count}}</h1>

    <div @click="changeCount">click event</div>

    {{aa | numberToLetter}}

    <input
      type="text"
      v-uname="username"
      v-model="username"
      v-on:change="userNameChange"
      :placeholder="username" />

    <div @click="toast">popup</div>

    <button @click="changeNumber">change number</button>

    <PDF :url="url" :currentPage="currentPage" :scale="scale" @gainCanvasSize="gainCanvasSize"></PDF>
  </div>
</template>

<script>

import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

import PDF from '../components/enhanceComponent.vue'

import alert from '../plugins/index.js'

console.log(PDF)

Vue.use(alert)

export default {
  name: 'home',

  computed: mapState([
    'count'
  ]),

  methods: {
    gainCanvasSize (payload) {
      console.log(payload)
    },

    changeNumber () {
      this.currentPage += 1
    },

    ...mapActions([
      'addCount',
    ]),

    changeCount () {
      this.addCount(10)
    },

    userNameChange () {

    },

    toast () {
      this.$alert({
        title:'提示2',
        content:'这里是提示内容2'
      }).then((res)=>{
          console.log(res)
      })
    }
  },

  mounted () {

  },

  data() {
    return {
      aa: 1,
      username: '',
      url: 'https://cdn.mozilla.net/pdfjs/tracemonkey.pdf',
      currentPage: 1,
      scale: 1.5
    }
  },

  components: {
    PDF
  }

}
</script>

<style lang="scss" scoped>

</style>

