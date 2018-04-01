<template>
  <div class="abstract-box">
    <van-row>
      <van-col span="12" offset="2">
        <div class="abstract-title">
          Eiki烤鸭记
        </div>
        <div class="abstract-text">
          <div>2014年底，初次考雅思。</div>
          <div>2015年底，准备换换新的环境，开始新的一切了</div>
        </div>
        <div class="abstract-author">
          <img src="../../assets/img/th1.png" alt="">
          <span class="abstract-author-name">Eiki</span>
        </div>
      </van-col>
      <van-col span="6" offset="2">
        <van-swipe :autoplay="5000" class="auto-img">
          <van-swipe-item>
            <img src="../../assets/img/a1.png" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/a2.png" alt="">
          </van-swipe-item>
          <van-swipe-item>
            <img src="../../assets/img/a3.png" alt="">
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {Row,Col,Swipe,SwipeItem} from 'vant'
    export default {
        name: "abstract",
      components:{
        [Row.name]:Row,
        [Col.name]:Col,
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem
      }
    }
</script>

<style scoped lang="less">
  .abstract-box{
    position: relative;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: #fff;
    .auto-img{
      img{
        width: 100%;
      }
    }
    .abstract-text{
      line-height: 1.2rem;
      font-size: .8rem;
      color: #a6a6a6;
      div{
        height: 1.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .abstract-author{
      position: absolute;
      bottom: 1rem;
      left: 1.8rem;
      img{
        width: 1.6rem;
        border-radius: .8rem;
      }
      &-name{
        color: #505050;
      }
    }
  }
</style>
