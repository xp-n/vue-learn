<template>
  <div>
    <TestSchool></TestSchool>
    <TestStudent></TestStudent>
  </div>
</template>

<script>
  import TestStudent from './components/TestStudent.vue'
  import TestSchool from './components/TestSchool.vue'
  export default {
    name:'App',
    components: { TestSchool, TestStudent }
}
</script>
