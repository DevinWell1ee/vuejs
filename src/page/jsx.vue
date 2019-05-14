<script>
  import Vue from 'vue'

  const arr = [
    {name: 'home'},
    {name: 'mine'},
    {name: 'more'},
  ]

  export default Vue.component('list', {
    render (h) {
      return (
        <div>
          {
            arr.map(item => <div>{item.name}</div>)
          }
        </div>
      )
    }
  })
</script>
