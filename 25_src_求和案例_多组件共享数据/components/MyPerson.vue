<template>
  <div>
    <h1>人员列表</h1>
    <h2 style="color:red">Count组件的求和为:{{sum}}</h2>
    <input type="text" v-model="name">
    <button @click="addPerson">添加</button>
    <br>
    <ul>
      <li v-for="p in persons" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
  
</template>

<script>
  import { nanoid } from 'nanoid'
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        persons: this.$store.state.persons,
        name: ''
      }
    },
    methods: {
      addPerson() {
        const personObj = {id: nanoid(), name: this.name}
        this.$store.commit('ADD_PERSON', personObj)
        this.name = ''
      }
    },
    computed:{ 
      ...mapState(['sum'])
    }
  }
</script>

<style>

</style>