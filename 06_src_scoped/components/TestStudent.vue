<template>
  <div>
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age + 1}}</h2>
    <h2>性别:{{sex}}</h2>
  </div>
</template>

<script>
  export default {
    name:'TestStudent',
    data() {
      return {
        name:'zhangsan',
        age:17,
        sex:'男'
      }
    },
  }
</script>
