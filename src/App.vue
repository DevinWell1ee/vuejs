<template>
  <div id="root">
    <router-link to="/">
      <span>home</span>
    </router-link>|

    <router-link to="/mine">mine</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
  #root {
    height: 100%;
    width: 100%;
  }
</style>
