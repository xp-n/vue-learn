<template>
  <div class="demo">
    <h2 class="fontDemo">学校:{{name}}</h2>
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
<!-- todo scoped属性定义作用域，只作用于当前模块 -->
<style lang="less" scoped>
  .demo {
    background-color: orange;
    .fontDemo {
      font-size: 16px;
    }
  }
</style>