<template>
  <div class="category">
    <h2>{{title}}分类</h2>
    ......
  </div>
</template>

<script>
  export default {
    props: ['title', 'listData']
  }
</script>

<style scoped>
  .category {
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h2 {
    background-color: orange;
    text-align: center;
  }
</style>