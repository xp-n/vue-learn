<template>
  <div class="school">
    <h2>name:{{name}}</h2>
    <h2>address:{{address}}</h2>
    <button @click="SchoolNameInfo">提示学校名字</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'atguigu',
        address: 'beijing'
      }
    },
    props: [ 'printSchoolName' ],
    methods: {
      SchoolNameInfo() {
        this.printSchoolName(this.name)
      }
    }
  }
</script>

<style scoped>
  .school {
    background-color: green;
    padding: 5px;
    margin: 5px;
  }
</style>