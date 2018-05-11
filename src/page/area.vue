<template>
  <div>
    <h1>area</h1>

    <button @click="show">点击</button>
    <vue-city-picker ref="picker" @select="select" :data="flower"></vue-city-picker>
  </div>
</template>

<script>
import vueCityPicker from 'vue-city-bspicker'
import { formatArea } from '@/util'
import { formatEUIData } from '@/utilx'

export default {
  data () {
    return {
      flower: formatArea()
    }
  },

  methods: {
    show: function(){
      this.$refs['picker'].show();
    },

    select: function(){
      console.log(arguments)
    }
  },

  components: {
    vueCityPicker
  }
}
</script>
