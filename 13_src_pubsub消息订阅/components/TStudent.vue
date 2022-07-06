<template>
  <div class="student">
    <h2>name:{{name}}</h2>
    <h2>age:{{age}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    data() {
      return {
        name: 'zhangsan',
        age: 18
      }
    },
    mounted() {
      this.pubid = pubsub.subscribe('hello', (msg, data) => {
        console.log(msg, data)
      })
      // this.$bus.$on('hello', (data) => {
      //   console.log('Student', data)
      // })

    },
    beforeDestroy() {
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubid)
    }
  }
</script>

<style scoped>
  .student {
    background-color: orange;
    padding: 5px;
    margin: 5px;
  }
</style>