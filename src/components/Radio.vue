<template>
  <div id="radio">

    <FixedNav class="foot"></FixedNav>
  </div>
</template>

<script>
  //引入组件
  import FixedNav from './modules/FixedNav'


  export default {
    name: "radio",
    components:{
      FixedNav,
    }
  }
</script>

<style scoped lang="less">
  #douban{
    .foot{
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: 100;
    }
  }
</style>
