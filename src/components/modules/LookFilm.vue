<template>
    <div class="look-film">
      <ul class="list">
        <li v-for="item in list" class="item">
          <img :src="item.src" alt=""/>
          <div class="item-title">{{item.title}}</div>
          <div class="item-text">{{item.text}}</div>
        </li>
      </ul>
    </div>
</template>

<script>
  import src1 from '../../assets/img/loo1.png'
  import src2 from '../../assets/img/loo2.png'
    export default {
      name: "look-film",
      data(){
          return{
            list:[
              {
                title:'找电影',
                text:'悬疑/治愈/美国',
                src:src1,
              },
              {
                title:'我的电影',
                text:'2部',
                src:src2,
              }
            ]
          };
      }
    }
</script>

<style scoped lang="less">
  .look-film{
    height: 5.375rem;
    border-top: .0626rem solid #e5e5e5;
    border-bottom: .125rem solid #e5e5e5;
    background-color: #fff;
    .list{
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items:center;
    }
    .item{
      position: relative;
      height: 2.8rem;
      padding-left: 4rem;
      padding-right: 1.5rem;
      line-height: 1.4rem;
      /*background-repeat: no-repeat ;*/
      /*background-position: .5rem center;*/
      /*background: url("../../assets/img/loo1.png") no-repeat .5rem center;*/
      img{
        position: absolute;
        top: 0;
        left: .5rem;
      }
      &:after{
        position: absolute;
        top: 0;
        right: 0;
        content: '';
        width: 1rem;
        height: 100%;
        background: url("../../assets/img/looico.png") no-repeat center;
      }
    }
    .item:last-child{
      border-left: .06rem solid #b4b4bb;
    }
    .item-title{
      font-size: 1.05rem;
      font-weight: bold;
    }
    .item-text{
      color: #b4b4bb;
      font-size: .8rem;
    }
  }
</style>
