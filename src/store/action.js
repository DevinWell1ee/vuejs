export default {
  addCount({ commit, state}, num) {
    commit('ADD_COUNT', num)
  }
}