<template>
  <div class="imgText-box">
    <van-row>
      <van-col span="6">
        <van-icon name="pending-deliver" class="time ico"/>
        <div class="name">有点时间</div>
      </van-col>
      <van-col span="6">
        <van-icon name="completed" class="calendar ico"/>
        <div class="name">有点日历</div>
      </van-col>
      <van-col span="6">
        <van-icon name="shop" class="books ico"/>
        <div class="name">有点书店</div>
      </van-col>
      <van-col span="6">
        <van-icon name="play" class="play ico"/>
        <div class="name">有点视频</div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {Row,Col,Icon} from 'vant'
    export default {
      name: "img-text",
      components:{
        [Row.name]:Row,
        [Col.name]:Col,
        [Icon.name]:Icon
      }
    }
</script>

<style scoped lang="less">
  .imgText-box{
    height: 4rem;
    padding-top: .8rem;
    padding-bottom: .8rem;
    background-color: #fff;
    text-align: center;
    .ico{
      font-size: 1.5rem;
      line-height: 2.5rem;
    }
    .time{
      color: #ffc300;
    }
    .calendar{
      color: #d43030;
    }
    .books{
      color: #4fca4f;
    }
    .play{
      color: #ff5733;
    }
    .name{
      color: #505050;
    }
  }
</style>
