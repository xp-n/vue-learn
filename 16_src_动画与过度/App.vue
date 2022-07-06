<template>
  <div>
    <TestAnimat/>
    <TestAnimat2/>
  </div>
</template>

<script>
  import TestAnimat from './components/TestAnimat.vue'
  import TestAnimat2 from './components/TestAnimat2.vue'
  export default {
      components: { TestAnimat, TestAnimat2 },
      methods: {
        showInfo() {
          console.log(this.$refs.title) //获取ref='title'的元素
        }
      }
  }
</script> 
