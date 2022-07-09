import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import store from './store'  //store底下是名字为index的文件，不用加/index也能够识别 

Vue.use(VueResource)

new Vue({
  el: '#app',
  components: { App },
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
})