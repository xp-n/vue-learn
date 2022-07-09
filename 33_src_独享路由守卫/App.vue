<template>
  <div>
    <div class="row">
      <MyBanner />
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
            <!-- ! 切换组件时会销毁未显示的组件 -->
            <!-- ! 所有组件的$router属性是同一个 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import MyBanner from './components/MyBanner'
  export default {
    name: "App",
    components: { MyBanner }
}
</script>

