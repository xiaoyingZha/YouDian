<template>
    <div class="douban-navlist">
      <van-tabs :active="active">
        <van-tab v-for="item in navList" :title="item">
          <!--内容 {{ index }}-->
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
  import {Tabs,Tab} from 'vant'
    export default {
        name: "douban-navlist",
      data(){
        return{
          active:0,
          navList:['电影','电视','读书','音乐']
        }
      },
      components:{
        [Tabs.name]:Tabs,
        [Tab.name]:Tab
      }
    }
</script>

<style>
  .van-tab--active{
    color: #48d7c3;
    font-size: 1.1rem;
  }
  .van-tabs__nav-bar{
    background-color: #48d7c3;
  }
</style>
