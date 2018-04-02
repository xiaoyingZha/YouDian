<template>
  <div id="app">
    <!--<router-view></router-view>-->
      <RRR></RRR>
  </div>
</template>

<script>
import RRR from './components/modules/FilmList'

export default {
  name: 'App',
  components:{
    RRR
  }
}
</script>

<style lang="less">
  #app{
    background-color: #fafafa;
  }
  [v-cloak]{
    display: none;
  }
  /*主题：#48d7c3*/
</style>
