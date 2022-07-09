<template>
  <div class="category">
    <h2>{{title}}分类</h2>
    <slot :games="games">具名插槽,没有内容显示该文字</slot>
  </div>
</template>

<script>
  export default {
    props: ['title', 'listData'],
    data() {
      return {
        games: ['红色警戒', '穿越火线', '劲舞团'], 
      }
    }
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
