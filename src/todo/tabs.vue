<template>
  <div class="helper">
      <span class="left">{{unFinishTodoLength}} items left</span>
      <span class="tabs">
          <span
           v-for="state in states"
            :key="state"
             :class="[state,filter === state ? 'active' :'']"
             @click="toggleFilter(state)"
             >{{state}}</span>
      </span>
      <span class="clear" @click="clearAllcompleted">clear completed</span>
  </div>
</template>

<script>
export default {
    props:{
        filter:{
            type:String,
            required:true
        },
        todos:{
            type:Array,
            required:true
        }
    },
  data() {
      return {
          states:['all','active','completed']
      }
  },
   computed:{
        unFinishTodoLength() {
            return this.todos.filter(todo => !todo.completed).length
        }
    },
  methods:{
      clearAllcompleted() {
          this.$emit('clearAllcompleted')
      },
      toggleFilter(state) {
          this.$emit("toggle",state)
      }
  }
}
</script>


<style lang="stylus" scoped>
    .left{
        float left
    }
     .tabs{
        float left
        margin-left 200px
        span{
            padding 5px 10px
            cursor pointer
            &:hover{
                background-color #eee}
        }
    }
    .clear{
        float right
        cursor pointer
        &:hover{
            background-color #eee
            }
    }
</style>
