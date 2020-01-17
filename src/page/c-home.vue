<template>
  <div>
    c-home

    <span>{{$store.state.count}}</span>
    <button @click="increase">增加muatations</button>
    <button @click="add">增加actions</button>
  </div>
</template>

<script>
  export default {
    methods: {
      increase() {
        this.$store.commit("INCREASE", 1);
      },
      add() {
        this.$store.dispatch("add");
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>