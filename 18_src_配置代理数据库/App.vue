<template>
  <div>
    <button @click="getPersons">点我获取信息1</button>
    <button @click="getCars">点我获取信息2</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    methods: {
      getPersons() {
        axios.get('http://localhost:8080/atguigu/students').then( 
          response => {
            console.log('请求成功了', response.data)
          },
          error => {
            console.log('请求失败了', error.message)
          }
        )
      },
      getCars() {
        axios.get('http://localhost:8080/demo/cars').then( 
          response => {
            console.log('请求成功了', response.data)
          },
          error => {
            console.log('请求失败了', error.message)
          }
        )
      }
    }
  }
</script>

<style>

</style>