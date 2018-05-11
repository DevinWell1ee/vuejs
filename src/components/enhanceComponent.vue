<script>
  import PDF from './pdf.vue'

  function EnhanceComponent (WrappedComponent) {
    return {
      mounted () {
        // console.log('mounted')
      },

      render (h) {
        return h (WrappedComponent, {
          on: this.$listeners,
          attrs: this.$attrs,
          props: this.$props
        })
      }
    }
  }

  export default EnhanceComponent(PDF)
</script>
