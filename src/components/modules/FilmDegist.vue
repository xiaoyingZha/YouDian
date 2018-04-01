<template>
  <div class="film-degist">
    <div class="film-title">
      来自电影：追龙
    </div>
    <div class="film-content">
      <div class="film-content-left">
        <div class="left-title">如果今年国庆档只能看一部电影，那我选择这部最有意思的来看。</div>
        <div class="left-text">本文首发于知乎平台，欢迎关注。本次国庆档大片云集，欢迎大家来观看。</div>
      </div>
      <div class="film-content-right">
        <img src="../../assets/img/k.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "film-degist"
    }
</script>

<style scoped lang="less">
  .film-degist{
    padding: 1rem;
    background-color: #fff;
    .film-title{
      border-left: .1rem solid #999;
      padding-left: .6rem;
      margin-bottom: 1.5rem;
      color: #505050;

    }
    .film-content{
      overflow: hidden;
      &-left{
        float: left;
        width: 70%;
        div{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .left-title{
          font-size: 1.1rem;
        }
        .left-text{
          font-size: .8rem;
          line-height: 1.4rem;
          color: #a6a6a6;
        }
      }
      &-right{
        float: right;
        width: 20%;
        img{
          width: 100%;
        }
      }
    }
  }
</style>
