import Vue from 'vue'

class Store {
  constructor(options) {
    this.state = new Vue({
      data: options.state
    });

    this.mutations = options.mutations;
    this.actions = options.actions;

    options.getters && this.handleGetters(options.getters);
  }

  // 声明为箭头函数，why？
  commit = (type, arg) => {
    this.mutations[type](this.state, arg);
  };

  dispatch(type, arg) {
    this.actions[type](
      {
        commit: this.commit,
        state: this.state
      },
      arg
    );
  }

  handleGetters(getters) {
    this.getters = {};
    // 遍历getters所有key
    Object.keys(getters).forEach(key => {
      // 为this.getters定义若干属性，这些属性是只读的
      // $store.getters.score
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state);
        }
      });
    });
  }
}

Store.install = function (Vue) {
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  });
}

Vue.use(Store)

const store = {
  state: {
    count: 0
  },
  mutations: {
    INCREASE(state, num) {
      state.count += num;
    }
  },
  actions: {
    add({ commit, state, dispatch }, num) {
      setTimeout(() => {
        commit("INCREASE", 10);
      }, 1000);
    }
  },
  getters: {
    count(state) {
      return state.count
    }
  }
};

export default new Store(store);
