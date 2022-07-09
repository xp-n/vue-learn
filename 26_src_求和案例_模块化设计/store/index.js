import personAbout from './personAbout'
import countAbout from './countAbout'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    personAbout,
    countAbout
  }
})