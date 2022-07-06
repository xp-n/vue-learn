import Vue from 'vue'
import App from './App.vue'

//todo 全局混入
// import { hunhe, hunhe2 } from './mixin.js'
// Vue.mixin(hunhe)
// Vue.mixin(hunhe2)

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})