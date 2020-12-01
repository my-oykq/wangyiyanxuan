<template>
  <div id="home">
      <home-nav-bar></home-nav-bar>
      <home-tab></home-tab>
      <div class="home-main">
          <home-swiper></home-swiper>
          <home-section></home-section>
          <home-list></home-list>
          <home-gift></home-gift>
          <Pupolar/>
          <Recommend/>
          <FlashSale/>
          <HomeNew/>
          <ClassiFy/>
          
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'

import HomeNavBar from './childrenCpons/HomeNavBar'
import HomeTab from './childrenCpons/HomeTab'
import HomeSwiper from './childrenCpons/HomeSwiper'
import HomeSection from './childrenCpons/HomeSection'
import HomeList from './childrenCpons/HomeList'
import HomeGift from './childrenCpons/HomeGift'
import Pupolar from './childrenCpons/Pupolar'
import Recommend from './childrenCpons/Recommend'
import FlashSale from './childrenCpons/FlashSale'
import HomeNew from './childrenCpons/HomeNew'
import ClassiFy from './childrenCpons/ClassiFy'
  export default {
    components: {
      HomeNavBar,
      HomeTab,
      HomeSwiper,
      HomeSection,
      HomeList,
      HomeGift,
      Pupolar,
      Recommend,
      FlashSale,
      HomeNew,
      ClassiFy
    },
    methods: {
      // tabClick(index){
      //   console.log(index)
      // }
    },
    mounted () {
      // 分发数据
      this.$store.dispatch('getHomeData')
      this.$nextTick(() =>{
          new Bscroll('.home-main',{
          scrollY:true,
          click:true
        })
      })
    }
  }
</script>

<style scoped>
#home{
  /* position: relative; */
  height: 100vh;
}
.home-main{
  /* height: 100%; */
}
 
</style>
