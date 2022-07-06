<template>
  <div class="container">
    <MyCategory :title="美食" :listData="foods"></MyCategory>
    <MyCategory :title="游戏" :listData="games"></MyCategory>
    <MyCategory :title="电影" :listData="films"></MyCategory>
  </div>
</template>

<script>
import MyCategory from "./components/MyCategory.vue";
  // 引入样式:也可以在src下创建assets/src,但是import引入会很严格:比如字体路径找不到则会报错
  export default {
    name: "App",
    components: { MyCategory },
    data() {
      return {
        foods: ['火锅', '烧烤', '小龙虾'], 
        games: ['红色警戒', '穿越火线', '劲舞团'], 
        films: ['《教父》', '《拆弹专家》', '《你好，李焕英》']
      }
    }
}
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
  
</style>