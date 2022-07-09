<template>
  <h2>这里是About的内容</h2>
</template>

<script>
  export default {
    name: 'MyAbout',
    beforeRouteEnter(to, from, next) {  //进入守卫,通过路由规则(不通过路由规则:比如<MyAbout/>),进入该组件时调用
      if (to.meta.isAuth) {
        if (localStorage.name === 'atguigu') {
          next()
        }
        else {
          alert('无权限')
        }
      } 
      else {
        next()
      }
    },
    beforeRouteLeave(to, from, next) {  //离开守卫,通过路由规则,离开该组件时调用
      console.log(to, from)
      next()
    }
  }
</script>
