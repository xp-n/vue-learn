<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <!-- <TStudent v-on:atguigu="printStudentName" @demo="ubindTest" @click.native="demo2"></TStudent> -->
    <!-- ! 组件可以绑定内置事件，但会默认为该事件为自定义事件，因此需要加native -->
    <!-- <TStudent v-on:atguigu.once="printStudentName"></TStudent> 只触发一次--> 
    <TStudent ref="student"></TStudent>
    <TSChool :printSchoolName="printSchoolName"></TSChool>
  </div>
</template>

<script>
  import TStudent from './components/TStudent.vue'
  import TSChool from './components/TSchool.vue'
  export default {
    data() {
      return {
        msg:'hello'
      }
    },
    components: {
      TSChool, TStudent
    },
    methods: {
      printSchoolName(name) {
        console.log(name)
      },
      printStudentName(name, ...params) {
        console.log('事件被调用了', name, params)
      },
      ubindTest() {
        console.log('demo test')
      },
      demo2() {
        console.log('demo2 test')
      }
    },
    // mounted() { //这种写法更加灵活
    //   setInterval(() => {
    //     this.$refs.student.$on('atguigu', this.printStudentName) //推荐写法
    //     // this.$refs.student.$once('atguigu', this.printStudentName) //只触发一次
    //   }, 3000);
    // }
    //绑定事件的另一种方式
    mounted() {
      this.$refs.student.$on('atguigu', function sendStudentName(name, ...params) {
        console.log('事件被调用了', name, params, this)  //此时this是TStudent实例对象，因为该实例对象触发了atguigu事件

      })
      //所以若是想要直接写入函数，可如下这样写
      this.$refs.student.$on('atguigu', (name, ...params) => { console.log(name, params, this.msg) }) //此时this为App实例对象
    }
  }
</script>

<style>
  .app {
    background-color: grey;
    padding: 5px;
  }
</style>