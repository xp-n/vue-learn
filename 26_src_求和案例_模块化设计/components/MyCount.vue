<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h1>当前10倍求和为:{{bigSum}}</h1>
    <h1>学校:{{school}}</h1>
    <h1>学科:{{subject}}</h1>
    <h2 style="color:red">person组件的人数为{{persons.length}}</h2>
    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementWait(n)">待会再加</button>
    <button @click="incrementOdd(n)">和为奇数再加</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
  export default {
    data() {
      return {
        n: 1
      }
    },
    methods: {
      ...mapMutations('countAbout', {increment: 'JIA', decrement: 'JIAN'}),
      ...mapActions('countAbout', {incrementWait: 'jiaWait', incrementOdd: 'jiaOdd'}),
    },
    computed: {
      ...mapState('countAbout', ['sum', 'school', 'subject']),
      ...mapState('personAbout', ['persons']),
      ...mapGetters('countAbout', ['bigSum'])
    }
  }
</script>
<style>
  button {
    margin-left: 5px;
  }
</style>
