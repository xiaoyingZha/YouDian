import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    fileListData:[//书影音的电影数据
      {
        src:require('../assets/img/film1.png'),//src:require('../assets/img/film1.png'),
        title:'王牌特工2',
        grade:'7.3',
        hot:true
      },
      {
        src:require('../assets/img/film1.png'),
        title:'王牌特工2',
        grade:'7.3',
        hot:true
      }
    ]
  },
  getters:{

  },
  mutations:{

  },
  actions:{

  }
});
