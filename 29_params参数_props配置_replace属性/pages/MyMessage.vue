<template>
    <div>
      <ul>
        <li v-for="m in messageList" :key="m.id">
          <!-- <router-link :to="`/home/messages/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->
          <router-link :to="{
            // path: '/home/messages/detail',
            name:'xiangqing', //配置params必须用name,用path会报错
            params: {
              id: m.id,
              title: m.title
            }
          }">message{{m.id}}</router-link>
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
    }
  }
</script>

<style>

</style>