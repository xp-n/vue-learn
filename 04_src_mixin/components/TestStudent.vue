<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age + 1}}</h2>
    <h2>性别:{{sex}}</h2>
    <button @click="showName">展示名字</button>
  </div>
</template>

<script>
  import {hunhe, hunhe2} from '../mixin'
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
    mixins:[hunhe, hunhe2]
  }
</script>
