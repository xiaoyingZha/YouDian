<template>
  <div class="search-box">
    <van-row>
      <van-col offset="1" span="17">
        <div class="search">影视 唱片 图书等</div>
      </van-col>
      <van-col offset="1" span="4">
        <div class="search-other">
          <van-icon name="other-pay" :info="num"/>
        </div>
      </van-col>
    </van-row>
    <div class="search-inner"></div>
  </div>
</template>

<script>
  import {Row,Col,Icon} from 'vant'
    export default {
      name: "search-box",
      data(){
        return{
          num:'2'
        }
      },
      components:{
          [Row.name]:Row,
          [Col.name]:Col,
          [Icon.name]:Icon
      }
    }
</script>

<style lang="less">
  .search-box{
    height: 3rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    background-color: #48d7c3;
    .search{
      position: relative;
      height: 3rem;
      line-height: 3rem;
      padding-left: 3rem;
      background-color: #fff;
      color: #bebebe;
      border-radius: .5rem;
      &::before{
        position: absolute;
        top: .5rem;
        left: .5rem;
        content: '';
        width: 2rem;
        height: 2rem;
        background: url("../../assets/img/fdj.png") no-repeat;
        background-size: cover;
      }
    }
    .search-other{
      height: 3rem;
      line-height: 3rem;
      text-align: center;
      font-size: 1.5rem;
      color: #fff;
    }
  }

</style>
