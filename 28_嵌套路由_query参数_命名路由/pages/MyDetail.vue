<template>
  <div>
    <p>id:{{msgId}}</p>
    <p>title:{{msgTitle}}</p>
  </div>
</template>

<script>
  export default {
    name: 'MyDetail',
    computed: {
      msgId() {
        return this.$route.query.id
      },
      msgTitle() {
        return this.$route.query.title
      }
    }
  }
</script>

<style>

</style>