import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// 引入组件
import Start from '../components/Start'//引导页
import Home from '../components/Home'//首页
import Douban from '../components/Douban'//书影城
import Radio from '../components/Radio'//广播
import About from '../components/About'//我

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/douban',
      name: 'Douban',
      component: Douban,
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio,
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
  ],
  mode:'history'//去掉路由中的“#”符号
})
