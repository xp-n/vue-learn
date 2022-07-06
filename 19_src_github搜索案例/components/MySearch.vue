<template>
  <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;<button @click="getInfos">Search</button>
      </div>
    </section>
</template>

<script>
  import pubsub from 'pubsub-js'
  import axios from 'axios'
  export default {
    data() {
      return {
        keyWord: '',
      }
    },
    methods: {
      getInfos() {
        pubsub.publish('getInfo', {isFirst: false, isLoading: true, users:[], errorMsg: ''})
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
          response => {
            pubsub.publish('getInfo', {isFirst: false, isLoading: false, users: response.data.items, errorMsg: ''})
          },
          error => {
            pubsub.publish('getInfo', {isFirst: false, isLoading: false, users: [], errorMsg: error.message})
          }
        )
      }
    }
  }
</script>

<style>

</style>