<template>
    <div>
      <ul>
        <li v-for="m in messageList" :key="m.id">
          <!-- <router-link :to="`/home/messages/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
          <router-link :to="{
            name:'xiangqing',
            params: {
              id: m.id,
              title: m.title
            }
          }">message{{m.id}}</router-link>
          <button @click="pushShow(m)">push查看</button>
          <button @click="replaceShow(m)">replace查看</button>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
  export default {
    name: 'MyMessage',
    data() {
      return {
        messageList: [
          {id: '001', title: '消息1' },
          {id: '002', title: '消息2' },
          {id: '003', title: '消息3' }
        ]
      }
    },
    methods: {
      pushShow(m) {
        this.$router.push({
            name:'xiangqing',
            params: {
              id: m.id,
              title: m.title
            }
          })
      },
      replaceShow(m) {
        this.$router.replace({
            name:'xiangqing',
            params: {
              id: m.id,
              title: m.title
            }
          })
      }
    }
  }
</script>

<style>

</style>