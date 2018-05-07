<script>
import CommentList from '@/components/commentList'
import { connector } from '@/store'
console.log(connector)

export default connector.connect({
  mapStateToProps: {
    comments: state => state.comments
  },

  mapDispatchToProps: {
    fetch: 'fetchComments'
  }
})(CommentList)
</script>
