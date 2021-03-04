import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Main from '../components/Main'

Vue.use(Router);

const router = new Router({//实例化
  routes: [
    { path: '/',redirect:'/login'},//重定向到登陆页
    {path: '/login',name:'login',component: Login},//路由到login页
    {path: '/main',name:'main',component: Main}//路由到main页
  ]
});

export default router//暴露出去
