<template>
  <div>
    <h2>这里是Home的内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/messages">Messages</router-link>
        </li>
      </ul>
      <!-- todo 让不展示的组件保持挂载,不被销毁,include填写不被销毁的组件名(其他组件将被销毁),
           todo 不写include则缓存全部,多个则:include=[''] -->
      <keep-alive include="MyNews">
        <router-view></router-view>
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyHome',
  }
</script>
