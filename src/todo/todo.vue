<template>
  <section class="real-app">
      <input
       type="text"
       class="add-input"
       autofocus="autofocus"
       placeholder="接下去要做什么?"
       @keyup.enter="addTodo">
       <Item
        :todo="todo"
       v-for="todo in filterTodos"
       :key="todo.id"
       @del="deleteTodo"
       />
       <Tabs
        :filter="filter"
        :todos="todos"
        @toggle='toggleFilter'
        @clearAllcompleted = 'clearAllcompleted'
        />
  </section>
</template>

<script>
import Item from "./item.vue"
import Tabs from './tabs.vue'
let id = 0;
export default {
    data() {
        return {
            todos:[],
            filter:"all"
        }
    },
    // props:{
    //     todos:{
    //         type:Array,
    //         required:true
    //     }
    // },
    components:{
        Item,
        Tabs
    },
   computed:{
       filterTodos() {
           if(this.filter === "all"){
               return this.todos
           }
           const completed = this.filter === "completed"
           return this.todos.filter(todo => completed === todo.completed)
           
       }
   },
  methods:{
      addTodo(e) {
        this.todos.unshift({
            id:id++,
            content:e.target.value.trim(),
            completed:false
        })
        e.target.value = "";
      },
      deleteTodo(id) {
          this.todos.splice(this.todos.findIndex(todo => todo.id === id),1)
      },
      toggleFilter(state) {
          this.filter = state
      },
      clearAllcompleted() {
          this.todos = this.todos.filter(todo => !todo.completed)
      }
  }
}
</script>

<style>
    .real-app{
        width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #666
    }
    .add-input{
        position: relative;
        left: 30px;
        outline: none;
        height: 40px;
        font-size: 20px;
        border: none
    }
</style>


