<template>
  <div>
    <h1>当前求和为:{{sum}}</h1>
    <h1>当前10倍求和为:{{bigSum}}</h1>
    <h1>学校:{{school}}</h1>
    <h1>学科:{{subject}}</h1>
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
  import { mapState, mapGetters } from 'vuex'
  export default {
    data() {
      return {
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
    },
    computed: {
      // sum() {
      //   return this.$store.state.sum
      // },
      // school() {
      //   return this.$store.state.school
      // },
      // subject() {
      //   return this.$store.state.subject
      // },

      //注意此处不能用简写形式,因为value为字符串而非变量
      // ...mapState({sum:'sum', school: 'school', subject: 'subject'}), //...为es6语法，用于将对象中的每一个key value展开显示
      //简写形式
      ...mapState(['sum', 'school', 'subject']),
      
      // bigSum() {
      //   return this.$store.getters.bigSum
      // }

      // ...mapGetters({bigSum:'bigSum'}),
      ...mapGetters(['bigSum'])
    }
  }
</script>
<style>
  button {
    margin-left: 5px;
  }
</style>
