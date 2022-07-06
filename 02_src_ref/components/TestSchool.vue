<template>
  <div>
    <h2 class="demo">学校:{{schoolName}}</h2>
    <h2>地址:{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name:'TestSchool',
    data() {
      return {
        schoolName:"atguigu",
        address:"beijing"
      }
    }
  }
</script>

<style>
  .demo {
    background-color: grey;
  }
</style>