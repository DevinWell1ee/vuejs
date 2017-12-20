<template>
  <div>
    <h1>{{count}}</h1>
    <div @click="changeCount">click event</div>
    {{aa | numberToLetter}}
    <input type="text" v-uname="username" v-model="username" v-on:change="userNameChange" :placeholder="username">
    <div @click="toast">popup</div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState, mapActions } from 'vuex'
import alert from '../plugins/index.js'
Vue.use(alert)

export default {
  name: 'home',

  computed: mapState([
    'count'
  ]),

  methods: {
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
      username: ''
    }
  },

}
</script>

<style lang="scss" scoped>

</style>

