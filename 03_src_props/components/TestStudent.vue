<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>姓名:{{name}}</h2>
    <h2>年龄:{{age + 1}}</h2>
    <h2>性别:{{sex}}</h2>
  </div>
</template>

<script>
  export default {
    name:'TestStudent',
    data() {
      return {
        msg:'hello',
      }
    },
    // 第一种写法
    // props: ['name', 'age', 'sex']

    // 第二种写法
    // props: {
    //   name:String,
    //   age:Number,
    //   sex:String
    // }

    // 第三种写法
    props: {
      name: {
        type: String,
        required: true,
      },
      age: {
        type: Number,
        required: false,
        default: 18
      },
      sex: {
        type: String,
        required: true
      }
      
    }
  }
</script>
