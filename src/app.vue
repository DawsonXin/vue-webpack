<template>
  <div id="app">
      <div id="cover"></div>
      <Header></Header>       
      <Todo></Todo>
      <Footer></Footer>
  </div>
</template>
<script>
import Header from './todo/header.vue'
// import Footer from './todo/footer.jsx'
import Todo from "./todo/todo.vue"
import Footer from './todo/footer.jsx'
export default {
    components:{
        Header,
        Todo,
        Footer
    }
}
</script>
// scoped只在组建内生效
<style lang='stylus' scoped>
#app{
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    width 100%
    height 100%
}
#cover{
    position: absolute;
    top: 0;
    left: 0;
    background-color: #999;
    opacity: .9;
    z-index: -1;
}
</style>
