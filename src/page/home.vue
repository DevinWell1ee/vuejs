<template>
  <div>
    <h1>{{count}}</h1>

    <nb-throttle :time="1000" events="click">
      <button @click="changeCount">click event</button>
    </nb-throttle>

    <hr>
    <br>
    <br>

    {{aa | numberToLetter}}

    <hr>
    <br>
    <br>

    <input
      type="text"
      v-uname="username"
      v-model="username"
      v-on:change="userNameChange"
      :placeholder="username" />

    <hr>
    <br>
    <br>

    <button @click="toast">popup</button>

    <hr>
    <br>
    <br>

    <nb-button></nb-button>

    <hr>
    <br>
    <br>

    <button @click="goMine">go mine</button>
  </div>
</template>

<script>

import Vue from 'vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'home',

  computed: mapState([
    'count'
  ]),

  created () {
    this.$eventBus.$on('emit-test', (val) => {
      console.log(val)
    }, this)
  },

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
    },

    goMine () {
      this.$eventBus.$emit('emit-test', { test: 'emit---' })

      this.$router.push({path: '/mine'})
    }
  },

  mounted () {

  },

  data() {
    return {
      aa: 1,
      username: ''
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

