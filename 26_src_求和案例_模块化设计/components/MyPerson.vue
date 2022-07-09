<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color:red">Count组件的求和为:{{sum}}</h2>
    <h2>列表中第一个人名是{{firstPerson}}</h2>
    <input type="text" v-model="name" ref="inputName">
    <button @click="addPerson">添加</button>
    <button @click="addWangPerson">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个随机名字的人</button>
    <br>
    <ul>
      <li v-for="p in persons" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
  
</template>

<script>
  import { nanoid } from 'nanoid'
  export default {
    data() {
      return {
        persons: this.$store.state.personAbout.persons,
        name: ''
      }
    },
    methods: {
      addPerson() {
        const personObj = {id: nanoid(), name: this.name}
        this.$store.commit('personAbout/ADD_PERSON', personObj)
        this.name = ''
      },
      addWangPerson() {
        this.$store.dispatch('personAbout/addWangPerson', this.name)
        this.name = ''
        this.$refs.inputName.focus()
      },
      addPersonServer() {
        this.$store.dispatch('personAbout/addPersonServer')
      }
    },
    computed:{ 
      sum() {
        return this.$store.state.countAbout.sum
      },
      firstPerson() {
        return this.$store.getters['personAbout/firstPerson']
      }
    }
  }
</script>

<style>

</style>