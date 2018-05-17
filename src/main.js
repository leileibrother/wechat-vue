// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import VueResource from 'vue-resource'
import store from './vuex'
import '../node_modules/mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(MintUI);


/* 路由跳转改变页面title */
router.afterEach(function (to) {
  window.scrollTo(0, 0);
  document.title = to.meta.pageTitle ? to.meta.pageTitle : '梦想基因'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
