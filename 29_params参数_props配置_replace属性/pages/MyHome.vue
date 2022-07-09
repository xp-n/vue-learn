<template>
  <div>
    <h2>这里是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
          <!-- ! replace模式将开启替换模式(默认为push),替换掉上一次记录 -->
        </li>
        <li>
          <router-link replace class="list-group-item" active-class="active" to="/home/messages">Messages</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyHome',
  }
</script>
