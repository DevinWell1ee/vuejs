export default {
  addCount({ commit, state}, num) {
    commit('ADD_COUNT', num)
  },

  fetchComments({ commit, state }) {
    setTimeout(() => {
      commit('SET_COMMENTS', [
        {
          body: 'lalala',
          author: 'xxx',
          id: 1
        },
        {
          body: 'aaaa',
          author: 'sss',
          id: 2
        }
      ])
    }, 1000)
  }
}