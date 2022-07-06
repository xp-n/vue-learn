<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" :appear="true">
    <!-- ! :appear="true"可简写为appear -->
      <h2 class="demo" v-show="isShow">你好啊</h2>
    </transition>
  </div>
</template>

<script>
  export default {
    name:'TestAnimat',
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
  .hello-enter-active {
    animation: testAnimat 0.5s linear;
  }

  .hello-leave-active {
    animation: testAnimat 0.5s linear reverse;
  }
  @keyframes testAnimat {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>