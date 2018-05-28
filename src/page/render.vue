<script>
  import Vue from 'vue'

  const arr = [
    {name: 'home'},
    {name: 'mine'},
    {name: 'more'},
  ]

  export default Vue.component('list', {
    render: function (createElement) {
      return createElement('div',
        Array.apply(null, arr.map(item => {
          console.log(item.name)
          return createElement('p', item.name)
        }))
      )
    }
  })
</script>
