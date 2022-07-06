<template>
  <div>
    <h2 ref="title">hello</h2>
    <TestSchool></TestSchool>
    <button ref="btn" @click="showInfo">提示标题</button>
  </div>
</template>

<script>
import TestSchool from './components/TestSchool.vue'
export default {
    components: { TestSchool },
    methods: {
      showInfo() {
        console.log(this.$refs.title) //获取ref='title'的元素
      }
    }
}
</script>
