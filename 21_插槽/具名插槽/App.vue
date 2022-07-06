<template>
  <div class="container">
    <MyCategory title="美食" :listData="foods">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg">
      <a href="#" slot="footer">更多美食</a>
    </MyCategory>
    <MyCategory title="游戏" :listData="games">
      <ul slot="center" v-for="(game, index) in games" :key="index">
        <li>{{game}}</li>
      </ul>
      <div slot="footer" class="gameContent">
        <a href="#">单机游戏</a>
        <a href="#">网络游戏</a>
      </div>
    </MyCategory>
    <MyCategory title="电影" :listData="films">
      <video controls slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="videoContent">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h3>欢迎观影</h3>
      </template>
    </MyCategory>
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