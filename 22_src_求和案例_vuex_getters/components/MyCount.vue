<template>
  <div>
    <h1>当前求和为:{{$store.state.sum}}</h1>
    <h1>当前10倍求和为:{{$store.getters.bigSum}}</h1>
    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementWait">待会再加</button>
    <button @click="incrementOdd">和为奇数再加</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        sum: 0,
        n: 1
      }
    },
    methods: {
      increment() {
        this.$store.commit('JIA', this.n)
      },
      decrement() {
        this.$store.commit('JIAN', this.n)
      },
      incrementWait() {
        this.$store.dispatch('jiaWait', this.n)
      },
      incrementOdd() {
        this.$store.dispatch('jiaOdd', this.n)
      },
    mounted() { 
      console.log('count',this)
    }
  }
  }
</script>
<style>
  button {
    margin-left: 5px;
  }
</style>
