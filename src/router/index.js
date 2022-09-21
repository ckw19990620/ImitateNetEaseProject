import Vue from 'vue'
import VueRouter from 'vue-router'
// import Detail from '@/components/Detail'
// 通过import xxx from xxx 引入组件的方式，不论组件有没有被使用，组件都会被加载进来
// import Recommend from '@/views/Recommend'
// import Singer from '@/views/Singer'
// import Rank from '@/views/Rank'
// import Search from '@/views/Search'

// 实现Vue组件的按需加载
const Recommend = (resolve) => {
  import('@/views/Recommend').then((module) => {
    resolve(module)
  })
}
const Detail = (resolve) => {
  import('@/views/Detail').then((module) => {
    resolve(module)
  })
}
const Rank = (resolve) => {
  import('@/views/Rank').then((module) => {
    resolve(module)
  })
}
const Singer = (resolve) => {
  import('@/views/Singer').then((module) => {
    resolve(module)
  })
}
const Search = (resolve) => {
  import('@/views/Search').then((module) => {
    resolve(module)
  })
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/recommend'
  },
  {
    path: '/recommend',
    component: Recommend,
    children: [{
      path: 'detail/:id/:type',
      component: Detail
    }]
  },
  {
    path: '/singer',
    component: Singer
  },
  {
    path: '/rank',
    component: Rank
  },
  {
    path: '/search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
