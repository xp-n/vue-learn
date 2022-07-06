<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input v-show="todo.isEdit" ref="title" type="text" name="" :value="todo.title" @blur="handleBlur(todo, $event)">
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
  export default {
    
    methods: {
      handleCheck(checkId) {
        this.$bus.$emit('checkTodo', checkId)
      },
      handleDelete(checkId) {
        if (confirm('确认删除吗?')) {
          console.log(checkId)
          this.$bus.$emit('deleteTodo', checkId)
        }
      },
      handleEdit(todo) {
        if (todo.prototype.hasOwnProperty.call('isEdit')) {
          todo.isEdit = true
          console.log('@')
        } else {
          this.$set(todo, 'isEdit', true)
          console.log('创建isEdit属性')
        }
        this.$nextTick(function() { //官方写法 nextTick用于下一DOM更新后再进行()里的操作
          this.$refs.title.focus()  //不加nextTick会导致input还没出来(v-show)就给其添加focus-无效
        })
        // setTimeout(() => {
        //   this.$refs.title.focus() 
        // });
      },
      handleBlur(todo, e) {
        todo.isEdit = !todo.isEdit
        if (!e.target.value.trim()) {
          alert('输入不能为空')
          return
        }
        this.$bus.$emit('editTodo', todo, e.target.value)
        // todo.title = e.target.value
      }

    },
    props: ['todo']
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: #ddd;
  }

  li:hover button {
    display: block;
  }
</style>