<template>
   <div id="home">
     <SearchBox class="head"></SearchBox>
     <div class="body">
       <Abstract class="speed-next"></Abstract>
       <ImgText class="speed-next"></ImgText>
       <Photo class="speed-next"></Photo>
       <FilmDegist></FilmDegist>
     </div>
     <FixedNav class="foot"></FixedNav>
   </div>
</template>

<script>
  //引入组件
  import SearchBox from './modules/SearchBox'
  import FixedNav from './modules/FixedNav'
  import Abstract from './modules/Abstract'
  import ImgText from './modules/ImgText'
  import Photo from './modules/Photo'
  import FilmDegist from './modules/FilmDegist'


    export default {
      name: "home",
      components:{
        SearchBox,
        FixedNav,
        Abstract,
        ImgText,
        Photo,
        FilmDegist
      }
    }
</script>

<style scoped lang="less">
  #home{
    .head{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 100;
    }
    .foot{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 100;
    }
    .body{
      padding-top: 4rem;
      padding-bottom: 3rem;
      .speed-next{
        margin-bottom: 1rem;
      }
    }
  }
</style>
