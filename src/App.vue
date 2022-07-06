<template>
  <div class="container">
    <MyCategory title="游戏">
      <template slot-scope="atguigu">
        <ul>
          <li  v-for="(game, index) in atguigu.games" :key="index">{{game}}</li>
        </ul>
      </template>
    </MyCategory>
    <MyCategory title="游戏">
      <template slot-scope="{games}">
        <ol>
          <li v-for="(game, index) in games" :key="index">{{game}}</li>
        </ol>
      </template>
    </MyCategory>
    <MyCategory title="游戏">
      <template slot-scope="atguigu">
          <h4 v-for="(game, index) in atguigu.games" :key="index">{{game}}</h4>
      </template>
    </MyCategory>
    
  </div>
</template>

<script>
import MyCategory from "./components/MyCategory.vue";
  // 引入样式:也可以在src下创建assets/src,但是import引入会很严格:比如字体路径找不到则会报错
  export default {
    name: "App",
    components: { MyCategory }
}
</script>

<style>
  .container, .gameContent, .videoContent {
    display: flex;
    justify-content: space-around;
  }

  img, video {
    width: 200px;
    height: 100px;
  }

  h3 {
    text-align: center;
  }

  
</style>