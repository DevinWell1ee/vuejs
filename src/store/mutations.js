const ADD_COUNT = 'ADD_COUNT'
const SET_COMMENTS = 'SET_COMMENTS'

export default {
  [ADD_COUNT] (state, num) {
    state.count += num
  },

  [SET_COMMENTS] (state, comments) {
    state.comments = comments
  }

}