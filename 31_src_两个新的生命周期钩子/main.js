import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import router from './router'

Vue.use(vueRouter)


new Vue({
  el: '#app',
  components: { App },
  render: h => h(App),
  router: router
})