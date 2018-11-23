<template>
  <div id="zzz">
    <h1>111</h1>
    <img src="../assets/logo.png" alt="">
    <p>sadasd</p>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  mounted () {
    html2canvas(document.getElementById('zzz')).then(function(canvas) {
      document.body.appendChild(canvas);
    });
  }
}
</script>


<style lang="scss" scoped>

</style>
