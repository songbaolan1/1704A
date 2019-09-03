import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      meta:{
        required:true
      },
      component: () => import(/* webpackChunkName: "about" */ './views/home/home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "about" */ './views/login/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import(/* webpackChunkName: "about" */ './views/register/register.vue')
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})


router.beforeEach((to,from,next)=>{
  if(to.matched.some(item => item.meta.required)){ //需要守卫
    //是否登录
    const token = window.localStorage.token;
    if(!token){ //没登录
        next({
          path:'/login',
          query:{
            redirect:to.fullPath
          }
        });
    } else {
      next();
    }
  } else {
    next();
  }
})


export default router;