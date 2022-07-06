<template>
  <div>
    <h2>学校:{{name}}</h2>
    <h2>地址:{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:'TestSchool',
    data() {
      return {
        name:'atguigu',
        address:'beijing'
      }
    },
  }
</script>
