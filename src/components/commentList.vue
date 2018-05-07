<template>
  <ul>
    <li v-for="comment in comments"
      :key="comment.id"
    >
      {{comment.body}}-{{comment.author}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'commentList',

  props: {
    comments: {
      type: Array,
      default () {
        return []
      }
    },

    fetch: {
      type: Function,
      default: () => {}
    }
  },

  mounted () {
    console.log(this.fetch)
    this.fetch()
  }
}
</script>

