<template>
  <div class="container">
    <MyCount></MyCount>
  </div>
</template>

<script>
import MyCount from "./components/MyCount.vue";
  // 引入样式:也可以在src下创建assets/src,但是import引入会很严格:比如字体路径找不到则会报错
  export default {
    name: "App",
    components: { MyCount },
    mounted() { 
      console.log('app',this)
    }
}
</script>

