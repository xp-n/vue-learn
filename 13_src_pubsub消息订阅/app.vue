<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <TStudent></TStudent>
    <TSChool></TSChool>
  </div>
</template>

<script>
  import TStudent from './components/TStudent.vue'
  import TSChool from './components/TSchool.vue'
  export default {
    data() {
      return {
        msg:'hello'
      }
    },
    components: {
      TSChool, TStudent
    }
  }
</script>

<style>
  .app {
    background-color: grey;
    padding: 5px;
  }
</style>