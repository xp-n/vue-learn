<template>
  <div>
    <TestSchool name="张三" :age="18" sex="男"></TestSchool>
    <!-- ! age加上":"则引号内解析为表达式而非age属性赋值为字符串 -->
  </div>
</template>

<script>
import TestSchool from './components/TestStudent.vue'
export default {
    components: { TestSchool },
    methods: {
      showInfo() {
        console.log(this.$refs.title)
      }
    }
}
</script>

