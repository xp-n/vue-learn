import Vue from 'vue'
import App from './App.vue'

import plugins from './plugins.js'

Vue.use(plugins)

new Vue({
  el: '#app',
  components: { App },
  render: h => h(App)
})