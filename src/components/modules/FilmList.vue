<template>
  <div class="film-list">
    <div class="list-box">
      <ul>
        <li v-cloak>
          <img src="../../assets/img/film1.png" alt="">
          <div class="title">火力全开</div>
          <div class="grade">
            <span>❤❤❤❤❤</span>
            <span>7.3</span>
          </div>
          <div class="hot">正在热议</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: "film-list",
      data(){
          return {

          };
      },
      computed:{

      }
    }
</script>

<style scoped>

</style>
