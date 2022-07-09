import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const actions = {
  jia(context, value) {
    console.log('action的jia被调用了')
    context.commit('JIA', value)
  },
  jian(context, value) {
    console.log('action的jian被调用了')
    context.commit('JIAN', value)
  },
  jiaWait(context, value) {
    console.log('action的jiaWait被调用了')
    setTimeout(() => {
      context.commit('JIA', value)
    }, 500);
  },
  jiaOdd(context, value) {
    console.log('action的jiaOdd被调用了')
    if (context.state.sum % 2) {
      context.commit('JIA', value)
    }
  }
}
const mutations = {
  JIA(state, value) {
    console.log('mutations的JIA被调用了')
    state.sum += value
  },
  JIAN(state, value) {
    console.log('mutations的JIAN被调用了')
    state.sum -= value
  }
}
const state = {
  sum: 0
}

export default new Vuex.Store({
  actions,
  mutations,
  state
})