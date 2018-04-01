<template>
  <van-row class="start-wrap">
    <van-col offset="6" span="12">
      <div class="start-wrap__smile">: )</div>
      <p class="start-wrap__text">
        2018年3月31日，星期六<br/>
        遇见你，有点美丽
      </p>
      <div class="start-wrap__foot">
        <img src="../assets/img/i.png" alt="">
        <span class="start-wrap-douban">有点</span>
        <span>有点精神的角落</span>
      </div>
      <van-button class="start-wrap__jump" tag="a" href="javascript:;" @click="clickHandle" target="_blank">
        跳过1
      </van-button>
    </van-col>
  </van-row>
</template>

<script>
  import {Row,Col,Button} from 'vant'
    export default {
      name: "start",
      data(){
        return {
          clickSkip:'home'
        }
      },
      components:{
        [Row.name]:Row,
        [Col.name]:Col,
        [Button.name]:Button
      },
      methods:{
        clickHandle(){
          this.$router.push(this.clickSkip);//编程式路由
        }
      }
    }
</script>

<style lang="less">
  .start-wrap{
    background-color: #fff;
    &__smile{
      padding-top: 8rem;
      font-size: 5rem;
      color: #48d7c3;
      text-align: center;
      margin-bottom: 1rem;
    }
    &__text{
      text-align: center;
      color: #b4b4b4;
    }
    &__foot{
      position: absolute;
      bottom: 2rem;
      left: 7rem;
      img{
        float: left;
        width: 2rem;
        margin-right: 1rem;
      }
      span{
        float: left;
        color: #a6a6a6;
      }
      span:nth-of-type(1){
        width: 70%;
        font-weight: bold;
      }
      span:nth-of-type(2){
        font-size: 12px;
      }
    }
    &__jump{
      position: absolute;
      bottom: 2rem;
      right: 2rem;
      border-radius: 1rem;
      height: 1.5rem;
      line-height: 1.5rem;
      font-size: .8rem;
      color: #c1c1c1;
      border-color: #efefef;
    }
  }

</style>
