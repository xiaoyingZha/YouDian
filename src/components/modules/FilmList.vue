<template>
  <div class="film-list">
    <div class="list-box">
      <ul>
        <li v-cloak v-for="item in fileListData">
          <img :src="item.src" alt="">
          <div class="title">{{item.title}}</div>
          <div class="grade">
            <span>❤❤❤❤</span>
            <span>{{item.grade}}</span>
          </div>
          <div class="hot" v-if="item.hot">
            正在热议
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  //到当前组件的开发啦
    export default {
      name: "film-list",
      data(){
          return {
            dataList:[],//使用[]初始化
          };
      },
      computed:{
        ...mapState(['fileListData'])
      },
      created(){
        this.dataList = this.fileListData;
      }
    }
</script>

<style scoped>

</style>
