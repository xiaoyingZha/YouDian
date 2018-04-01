<template>
  <div class="photo">
    <div class="photo-title">
      回归自然
    </div>
    <div class="photo-img">
      <div class="photo-img-big">
        <img src="../../assets/img/p1.png"/>
      </div>
      <div class="photo-img-samll">
        <img src="../../assets/img/p2.png"/>
      </div>
      <div class="bottom"></div>
      <div class="photo-img-samll shade">
        <img src="../../assets/img/p2.png"/>
      </div>
    </div>
    <div class="photo-foot">
      <img src="../../assets/img/th1.png"/>
      <span>Eiki</span>
      <span class="photo-more">...</span>
    </div>
  </div>
</template>

<script>
  import {Row,Col} from 'vant'
    export default {
        name: "photo",
      components:{
        [Row.name]:Row,
        [Col.name]:Col
      }
    }
</script>

<style scoped lang="less">
  .photo{
    padding:1rem;
    background-color:#fff;
    &-title{
      line-height:1.2rem;
      color:#888a88;
    }
    &-img{
      height:10rem;
      margin-top:1rem;
      overflow: hidden;
      &-big{
        float:left;
        width:75%;
        margin-right:5%;
        img{
          width:100%;
        }
      }
      &-samll{
        float:right;
        width:20%;
        height:45%;

        img{
          width:100%;
          height: 100%;
        }
      }
      .bottom{
        float:left;
        width:20%;
        height:10%;
      }
      .shade{
        position: relative;
        &::after{
          content: '100+';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #fff;
          background-color: rgba(0,0,0,.5);
          text-align: center;
          line-height: 4rem;
        }
      }
    }
    .photo-foot{
      height:1.5rem;
      line-height:1.5rem;
      margin-top:1rem;
    }
    .photo-more{
      float:right;
      color:#e5e5e5;
      font-size:1.5rem;
      margin-top:-.5rem;
    }
  }
</style>
