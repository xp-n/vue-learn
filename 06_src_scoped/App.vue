<template>
  <div>
    <TestSchool></TestSchool>
    <TestStudent></TestStudent>
  </div>
</template>

<script>
import TestSchool from './components/TestSchool.vue'
import TestStudent from './components/TestStudent.vue'
export default {
    components: { TestSchool, TestStudent },
}
</script>