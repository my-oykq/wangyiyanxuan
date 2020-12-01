<template>
  <tab-bar>
      <tab-bar-item link="/home">
         <img slot="icon" src="~assets/img/tabbar/home.png" alt="">
         <img slot="active-icon" src="~assets/img/tabbar/home_active.png" alt="">
         <div slot="text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/category">
         <img slot="icon" src="~assets/img/tabbar/category.png" alt="">
         <img slot="active-icon" src="~assets/img/tabbar/category_active.png" alt="">
         <div slot="text">分类</div>
      </tab-bar-item>
      <tab-bar-item link="/deserve">
         <img slot="icon" src="~assets/img/tabbar/zhidemai.png" alt="">
         <img slot="active-icon" src="~assets/img/tabbar/zhidemai_active.png" alt="">
         <div slot="text">值得买</div>
      </tab-bar-item>
      <tab-bar-item link="/cart">
         <img slot="icon" src="~assets/img/tabbar/cart.png" alt="">
         <img slot="active-icon" src="~assets/img/tabbar/cart_active.png" alt="">
         <div slot="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="/profile">
         <img slot="icon" src="~assets/img/tabbar/profile.png" alt="">
         <img slot="active-icon" src="~assets/img/tabbar/profile_active.png" alt="">
         <div slot="text">个人中心</div>
      </tab-bar-item>
  </tab-bar>
</template>

<script type="text/ecmascript-6">
import TabBar from 'common/tabbar/TabBar'
import TabBarItem from 'common/tabbar/TabBarItem'
  export default {
      components: {
          TabBar,
          TabBarItem
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
