import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)  

export default new Router({
  routes: [
    {
      path: '/',
      redirect: "/login/login",
    },
    {
      path: "/login/login", 
      component: () => import('@/components/login/login')
    },
    {
      path: '/main',     
      redirect: "/main/proinfo", 
      children: [
        {
          path: "proinfo",
          name: 'proinfo',
          component: () => import('@/components/main/proinfo')
        },
        {
          path: "workbench",
          name: 'workbench',
          component: () => import('@/components/main/workbench')
        },
        {
          path: "mine",
          name: 'mine',
          component: () => import('@/components/main/mine')
        }
      ]
    }
  ]
})
