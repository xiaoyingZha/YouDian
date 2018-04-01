<template>
  <div class="fixed-nav">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" @click="linkClick(0)">首页</van-tabbar-item>
      <van-tabbar-item icon="shop" @click="linkClick(1)">书影城</van-tabbar-item>
      <van-tabbar-item icon="pending-evaluate" @click="linkClick(2)">广播</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="linkClick(3)">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
    import {Tabbar,TabbarItem} from 'vant'
    export default {
      name: "fixed-nav",
      data(){
        return{
          active:0,
          linkPath:['/home','/douban','/radio','/about']
        }
      },
      components:{
        [Tabbar.name]:Tabbar,
        [TabbarItem.name]:TabbarItem
      },
      methods:{
        linkClick(num){
          this.$router.push(this.linkPath[num]);
          this.active = num;
        }
      },
      created(){
        let path = this.$route.path;
        let num;
        this.linkPath.filter((item,index)=>{
          if(item === path){
            num = index;
          }
        });
        this.active = num;
      }
    }
</script>

<style lang="less">
  .fixed-nav{
    .van-icon{
      font-size:1.4rem;
    }
    .van-tabbar-item--active{
      color:#48d7c3;
    }
  }
</style>
