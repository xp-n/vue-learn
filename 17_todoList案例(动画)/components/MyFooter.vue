<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isCheckedAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isCheckedAll2"/>
      <!-- ! 更简便的写法 -->
    </label>
    <span>
      <span>已完成{{doneTotal}}</span> / 全部{{total}}
    </span>
    <button class="btn btn-danger" @click="clrAllTodos">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  computed: {
    doneTotal() {
      return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    },
    total() {
      return this.todos.length
    },
    isCheckedAll() {
      return this.doneTotal === this.todos.length
    },
    isCheckedAll2: {
      get() {
        return this.doneTotal === this.todos.length
      },
      set(value) {
        this.$emit('checkAllTodo', value)
      }
    }
  },
  methods: {
    // checkAll(event) {
    //   this.checkAllTodo(event.target.checked)
    // }
    clrAllTodos() {
      this.$emit('clearAllTodos')
    }
  },
  props: ['todos']
}
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>