<template>
    <div class="douban-nav">
      <div class="nav-title">书影音</div>
      <div class="nav-search"></div>
      <div class="nav-message"></div>
    </div>
</template>

<script>
    export default {
        name: "douban-nav"
    }
</script>

<style scoped lang="less">
  .douban-nav{
    position: relative;
    height: 4rem;
    background-color: #fff;
    border-bottom: .125rem solid #dcdcdc;
    .nav-title{
      line-height: 4rem;
      text-align: center;
      font-size: 1.2rem;
    }
    .nav-search,.nav-message{
      width: 4rem;
      height: 4rem;
      position: absolute;
      top: 0;
    }
    .nav-search{
      right: 4rem;
      background: url("../../assets/img/o1.png") no-repeat center;
    }
    .nav-message{
      right: .5rem;
      background: url("../../assets/img/o2.png") no-repeat center;
    }
  }
</style>
