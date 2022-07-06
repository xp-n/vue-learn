<template>
  <div>
    <h2>学校:{{name}}</h2>
    <h2>地址:{{address}}</h2>
    <button @click="showName">展示名字</button>
  </div>
</template>

<script>
  import {hunhe, hunhe2} from '../mixin'
  export default {
    name:'TestSchool',
    data() {
      return {
        name:'atguigu',
        address:'beijing'
      }
    },
    mixins:[hunhe, hunhe2]
  }
</script>
