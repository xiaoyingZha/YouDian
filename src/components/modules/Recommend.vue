<template>
    <div class="recommend">
      <div class="recommend-scroll">
        <ul class="recommend-list" :style="{width:getUlW}">
          <li v-for="item in imgList" class="img-item">
            <img class="img" src="../../assets/img/tu1.png" alt="">
            <span class="img-text" :style="{backgroundColor: item.color}">{{item.text}}</span>
            <span class="img-ico">{{item.ico}}</span>
          </li>
        </ul>
      </div>
      <div class="scrollHidden"></div>
    </div>
</template>

<script>
    export default {
      name: "recommend",
      data(){
          return{
            imgList:[
              {
                src:"../../assets/img/tu1.png",
                text:'每一帧都可以当做背景！电影美如画系列。',
                ico:'预告片精选',
                color:'#d43030'
              },
              {
                src:'../../assets/img/tu1.png',
                text:'每一帧都可以当做背景！电影美如画系列。',
                ico:'有点推荐',
                color:'#148c44'
              },
              {
                src:'../../assets/img/tu1.png',
                text:'每一帧都可以当做背景！电影美如画系列。',
                ico:'热门话题',
                color:'#ff426f'
              },
              {
                src:'../../assets/img/tu1.png',
                text:'每一帧都可以当做背景！电影美如画系列。',
                ico:'有点高分',
                color:'#715da0'
              }
            ]
          };
      },
      computed:{
        getUlW(){
          return this.imgList.length*14*16 + 'px'
        }
      },
      created(){
        // this.imgList.length*
      }
    }
</script>

<style scoped lang="less">
  .recommend{
    height: 13rem;
    padding: 0 .5rem;
    background-color: #fff;

    .recommend-scroll{
      overflow-x: scroll;
      overflow-y: hidden;
      height: 13rem;
    }
    .recommend-list{
      display: flex;
      justify-content: space-around;
      padding-bottom: 1rem;
    }
    .img-item{
      position: relative;
      width: 13rem;
      height: 10.6rem;
      box-shadow: .1rem .1rem .3rem #858585;
      img{
        width: 100%;
        height: 75%;
      }
    }
    .img-text{
      height: 25%;
      display: block;
      padding: 0 1rem;
      color: #fff;
      overflow : hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .img-ico{
      position: absolute;
      bottom: 3rem;
      left: 1rem;
      padding: .1rem;
      font-size: .8rem;
      background-color: #fff;
      border-radius: .3rem;
    }
    .scrollHidden{
      position: relative;
      height: 1rem;
      background-color: #fff;
      margin-top: -.8rem;
      z-index: 10;
    }
  }
</style>
