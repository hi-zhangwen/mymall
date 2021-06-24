import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//路由懒加载
const home = () => import('views/home/Home')
const category = () => import('views/category/Category')
const cart = () => import('views/cart/Cart')
const profile = () => import('views/profile/Profile')
const detail = () => import('views/detail/Detail')
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/detail',
    component: detail
  },
]
export default new Router({
  routes,
  mode: 'history'
})