<template>
  <div>
    <canvas id="the-canvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: () => ''
    },

    scale: {
      type: Number,
      default: () => 1
    },

    currentPage: {
      type: Number,
      default: () => 1
    }
  },

  data () {
    return {
      pdfDoc: null
    }
  },

  mounted () {
    this.canvas = document.getElementById('the-canvas')
    this.ctx = this.canvas.getContext('2d')

    console.log(pdfjsLib)
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.489/pdf.worker.min.js'

    pdfjsLib.getDocument(this.url).then(pdfDoc_ => {
      this.pdfDoc = pdfDoc_

      this.renderPage(this.currentPage)
    })
  },

  methods: {
    renderPage (_page) {
      this.pdfDoc.getPage(_page)
        .then(page => {
          let viewport = page.getViewport(this.scale)
          this.canvas.height = viewport.height
          this.canvas.width = viewport.width

          this.$emit('gainCanvasSize', {
            width: this.canvas.width,
            height: this.canvas.height
          })

          let renderContext = {
            canvasContext: this.ctx,
            viewport: viewport
          }

          let renderTask = page.render(renderContext);

          renderTask.promise.then(() => {
            console.log('render')
          })
        })
    }
  },

  watch: {
    currentPage (val, oldVal) {
      console.log('change---------' + val)
      this.renderPage(val)
    }
  }
}
</script>
