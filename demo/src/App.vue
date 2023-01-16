<template>
  <div id="app">
    <input v-model="message">
    <input :value="message" @input="handleChange">
        {{message}} {{message + message}}
        <div :id="message"></div>
        <!-- <ul>
            <todo-item v-for="item in list" :title="item.title" :del="item.del"></todo-item>
        </ul> -->
        <todo-list>
            <todo-item @delete="handleDelete" v-for="item in list" :key="item.title" :title="item.title" :del="item.del">
                <template v-slot:pre-icon="{value}">
                    <span>前置图标 {{value}}</span>
                </template>

            </todo-item>
        </todo-list>
    </div>
</template>

<script>
import TodoItem from './components/TodoItem.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoItem,
    TodoList,
  },
  data() {
    return {
      message: 'hello world',
      list: [{
        title: '课程1',
        del: false
      }, {
        title: '课程2',
        del: true
      }],
    }
  },
  methods: {
    handleDelete(val) {
      console.log('handleDelete', val)
    },
    handleChange(e) {
      this.message = e.target.value
    }
  }
}
</script>

