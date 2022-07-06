<template>
  <div class="student">
    <h2>name:{{name}}</h2>
    <h2>age:{{age}}</h2>
    <button @click="StudentNameInfo">提示信息</button>
    <button @click="unbind">解绑</button>
    <button @click="death">销毁组件</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'zhangsan',
        age: 18
      }
    },
    methods: {
      StudentNameInfo() {
        this.$emit('atguigu', this.name, 100, 200, 300)
        this.$emit('demo')
      },

      unbind() {
        this.$off('atguigu')
        // this.$off(['atguigu', 'demo']) //多个事件解绑
        // this.$off() //全部解绑
      },
      death() {
        this.$destroy()
      }
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