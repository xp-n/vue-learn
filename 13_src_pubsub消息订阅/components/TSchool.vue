<template>
  <div class="school">
    <h2>name:{{name}}</h2>
    <h2>address:{{address}}</h2>
    <button @click="sendInfo">提示信息</button>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    data() {
      return {
        name: 'atguigu',
        address: 'beijing'
      }
    },
    methods: {
      sendInfo() {
        // this.$bus.$emit('hello', 666)
        pubsub.publish('hello', 666)
      }
    }
  }
</script>

<style scoped>
  .school {
    background-color: green;
    padding: 5px;
    margin: 5px;
  }
</style>