<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group 
    name="animate__animated animate__bounce" 
    enter-active-class="animate__zoomInDown"
    leave-active-class="animate__rollOut"
    appear>
    <!-- ! 多个元素过度 key值要唯一-->
      <h2 class="demo" v-show="!isShow" key="1">你好啊</h2>
      <h2 class="demo" v-show="isShow" key="2">你好啊!</h2>
    </transition-group>
  </div>
</template>

<script>
  import 'animate.css'
  export default {
    name:'TestAnimat2',
    data() {
      return {
        isShow: true
      }
    }
  }
</script>

<style>
  .demo {
    background-color: grey;
  }
  /* 如果没有指定name则hello改为v */
  .hello-enter, .hello-leave-to {
    transform: translateX(-100%);
  }
  .hello-leave, .hello-enter-to {
    transform: translateX(0);
  }
  .hello-enter-active, .hello-enter-active {
    animation: testAnimat 0.5s linear;
  }
  
</style>