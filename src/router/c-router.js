import Vue from 'vue'
import Home from '@/page/c-home.vue'
import Mine from '@/page/c-mine.vue'

class VueRouter {
  constructor(options) { // options 路由配置文件
    this.options = options;
    this.routerMap = {};
    // 直接利用vue的数据响应，不用自己写proxy, dep, watcher
    this.$routeInfo = new Vue({
      data: {
        currentPath: "/"
      }
    });
  }

  init() {
    // 监听路由变化
    this.bindEvents();
    // 解析路由配置
    this.createRouterMap(this.options);
    // 创建组件
    this.initComponent();
  }

  createRouterMap(options) {
    const { routes } = options;
    routes.forEach(o => {
      this.routerMap[o.path] = o.component;
    });
  }

  initComponent() {
    Vue.component("router-link", {
      props: {
        to: String
      },
      render(h) {
        return h( // tag, data, children
          "a",
          {
            attrs: {
              href: "#" + this.to
            }
          },
          this.$slots.default
        );
      }
    });
    Vue.component("router-view", {
      render: h => {
        // 使用箭头函数 是因为要使用外面的current
        let comp = this.routerMap[this.$routeInfo.currentPath];

        return h(comp);
      }
    });
  }
  //hash改变
  onHashchange() {
    this.$routeInfo.currentPath = window.location.hash.slice(1) || "/";
  }

  bindEvents() {
    window.addEventListener("load", this.onHashchange.bind(this));
    window.addEventListener("hashchange", this.onHashchange.bind(this));
  }
}

VueRouter.install = function(Vue) {
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router) {
        this.$options.router.init();
      }
    }
  });
};

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/mine",
      component: Mine
    }
  ]
});