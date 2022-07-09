import axios from 'axios'
import {nanoid} from 'nanoid'
export default {
  namespaced: true,
  actions: {
    addWangPerson(context, value) {
      if (value.indexOf('王') === 0) {
        context.commit('ADD_PERSON', {id: nanoid(), name: value})
      }
      else {
        alert('必须添加姓王的名字')
      }
    },
    addPersonServer(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          context.commit('ADD_PERSON', {id: nanoid(), name: response.data})
        },
        error => {
          alert('添加失败', error.message)
        }
      )
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
      console.log('mutations的ADD_PERSON被调用了')
      state.persons.unshift(value)
    }
  },
  state: {
    persons: [
      {id:'001', name:'张三'}
    ]
  },
  getters: {
    firstPerson(state) {
      return state.persons[0].name
    }
  },
}