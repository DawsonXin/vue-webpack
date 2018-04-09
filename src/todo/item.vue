<template>
  <div :class="['todo-item',todo.completed ? 'completed':'']">
      <input type="checkbox"
        class="toggle"
        v-model="todo.completed"
      >
      <label for="">{{todo.content}}</label>
      <button class="destory" @click="deleteTodo">X</button>
  </div>
</template>

<script>
export default { 
  props:{
      todo:{
          type:Object,
          required:true
      }
  },
  methods:{
      deleteTodo() {
        this.$emit("del",this.todo.id)
      }
  }
}
</script>

<style lang="stylus" scoped>
.todo-item{
    position relative 
    font-size 24px
    border-bottom 1px solid rgba(0,0,0,.06)
    &:hover{
        .destory:after{
            content '*'
        }

    }
    label {
        white-space pre-line
        word-break break-all
        padding 15px 60px 15px 15px
        margin-left 45px
        line-height 1.2
        transition color .4s
    }
    &.completed{
        label{
            color #888
            text-decoration line-through
        }
        }
        .toggle{
            width:16px;
            height 16px;
            }
    .destory{
        position absolute
        top 5px
        right 10px
        width 20px
        height 20px
        text-align center 
        line-height 20px
        font-size 20px
        color #cc9a9a
        margin-bottom 11px
        transition color .2s ease-out
        background-color transparentify 
        appearance none 
        cursor pointer
        outline none 
        border none
        }
}
</style>
