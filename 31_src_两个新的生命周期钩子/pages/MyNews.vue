<template>
    <ul>
      <li :style="{opacity}">欢迎学习vue</li>
      <li>news001</li><input type="text">
      <li>news002</li><input type="text">
      <li>news003</li><input type="text">
    </ul>
</template>

<script>
  export default {
    name: 'MyNews',
    data() {
      return {
        opacity: 1
      }
    },
    // mounted() { //该生命周期会导致切换展示组件而计时器不停止
    //   this.timer = setInterval(() => {
    //   console.log('@')
    //   this.opacity -= 0.01
    //   if (this.opacity <= 0)
    //       this.opacity = 1
    //   }, 16);
    // },
    // beforeDestroy() {
    //   clearInterval(this.timer)
    // },
    activated() {
      this.timer = setInterval(() => {
      console.log('@')
      this.opacity -= 0.01
      if (this.opacity <= 0)
          this.opacity = 1
      }, 16);
    },
    deactivated() {
      clearInterval(this.timer)
    }
  }
</script>

<style>

</style>