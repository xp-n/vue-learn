<template>
  <div>
    <p>id:{{id}}</p>
    <p>title:{{title}}</p>
  </div>
</template>

<script>
  export default {
    name: 'MyDetail',
    props: ['id', 'title']
  }
</script>

<style>

</style>