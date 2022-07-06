import Vue from 'vue'
import App from './App.vue'

// createApp(App).mount('#root')
new Vue({
  render:h => h(App)
}).$mount('#root')
