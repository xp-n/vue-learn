<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age + 1}}</h2>
    <h2>性别:{{sex}}</h2>
    <input type="text" v-fbind:value="name">
    <br>
    <button @click="hello">hello</button>
  </div>
</template>

<script>
  export default {
    name:'TestStudent',
    data() {
      return {
        msg:'hello',
        name:'zhangsan',
        age:17,
        sex:'男'
      }
    },
  }
</script>
