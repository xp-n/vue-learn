<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header"><h2>Vue Router Demo</h2></div>
    <button @click="back">后退</button>
    <button @click="forward">前进</button>
    <button @click="go">测试go</button>
  </div>
</template>

<script>
  export default {
    name: 'MyBanner',
    methods: {
      back() {
        this.$router.back()
      },
      forward() {
        this.$router.forward()
      },
      go() {
        this.$router.go(2) //正数表示前进步数,负数表示后退步数
      }
    }
  }
</script>

<style>

</style>