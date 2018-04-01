<template>
  <div id="app">
    <router-view></router-view>
    <!--<RRR></RRR>-->
  </div>
</template>

<script>
import RRR from './components/modules/FilmDegist'


export default {
  name: 'App',
  components:{
    RRR
  }
}
</script>

<style>
  #app{
    background-color: #fafafa;
  }
</style>
