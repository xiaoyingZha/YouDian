<template>
    <div class="today-reco">
      <van-cell-group class="today-reco-content">
        <van-cell :title="title" is-link :value="'全部'+ (total?total:0)" />
      </van-cell-group>
    </div>
</template>

<script>
  /*
  * 引入组件:
  *   import TodayReco from './components/modules/TodayReco'
  * 使用组件：
  *   <TodayReco title="此处是标题" total:"此处是更多数据数量"></TodayReco>
  *     参数：
  *       title：标题（必须）
  *       total：内容条数（可选，否则0）
  *
  * */
  import {CellGroup,Cell} from 'vant'
    export default {
      name: "today-reco",
      props:['title','total'],
      components:{
        [CellGroup.name]:CellGroup,
        [Cell.name]:Cell
      }
    }
</script>

<style>
  .today-reco{
    background-color: #fff;
  }
  .today-reco-content{
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
  .van-hairline--top-bottom::after{
    border: none;
  }
  .today-reco .van-cell__title{
    font-size: 1.1rem;
  }
  .today-reco .van-cell__value{
    color: #808080;
    font-size: 1rem;
  }
</style>
