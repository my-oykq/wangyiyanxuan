import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const Deserve = () => import("../views/deserve/Deserve.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Profile = () => import("../views/profile/Profile.vue")
Vue.use(VueRouter)
const routes = [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/deserve',
      component:Deserve
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    },
]
const router = new VueRouter({
    routes
})
export default router
