<template>
  <div class="container">
    <MySearch></MySearch>
    <MyItem></MyItem>
  </div>
</template>

<script>
import MyItem from "./components/MyList.vue";
import MySearch from "./components/MySearch.vue";
  // 引入样式:也可以在src下创建assets/src,但是import引入会很严格:比如字体路径找不到则会报错
  export default {
    name: "App",
    components: { MyItem, MySearch }
}
</script>

<style>

  
</style>