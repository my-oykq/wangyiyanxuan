<template>
  <div class="swiper">
    <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000">
            <van-swipe-item v-for="item in imgData" :key="item.id">
                <img :src="item.imgUrl" alt="" class="swiper_img">
            </van-swipe-item>
        </van-swipe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      name:"HomeSwiper",
      data () {
          return {
              imgData:[
                  {id:1, imgUrl:"https://yanxuan.nosdn.127.net/2f2d4d0111ff61308b17e8fee9d6d144.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
                  {id:2, imgUrl:"https://yanxuan.nosdn.127.net/fc5b710011301eacf58a2131dd34a8a6.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
                  {id:3, imgUrl:"https://yanxuan.nosdn.127.net/dfd10ee0da5eeed24a0a7125dfa862e1.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
                  {id:4, imgUrl:"https://yanxuan.nosdn.127.net/2a987a8a0b0bf44e16e995df22ee0f0f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
                  {id:5, imgUrl:"https://yanxuan.nosdn.127.net/e0ef4c35a46f46cc200aa1f742956acc.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
                  {id:6, imgUrl:"https://yanxuan.nosdn.127.net/0c694f92cdcd8490865ea2dd2e1fdce2.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
                  {id:7, imgUrl:"http://yanxuan-miaobi.nos-jd.163yun.com/3987559_1_6_wap_8ba8dd43c5b3c0361528114ade0c828c.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
                  {id:8, imgUrl:"https://yanxuan.nosdn.127.net/e3112d7145b68eafba2e0039192cab4f.jpg?type=webp&imageView&quality=75&thumbnail=750x0"},
              ]
          }
      }
  }
</script>

<style  scoped>
.swiper{
    width: 100%;
    height: 100%;
    
}
.banner{
    width: 100%;
    height: 100%;
}
.my-swipe{
    height: 300px;
    background-color:#fff;
}
.swiper_img{
    width: 100%;
   
} 
/* 修改第三方组件库的样式 */
.banner /deep/ .van-swipe__indicator{
    width: 15px;
    height: 15px;
    background: #DD1A21;
}
</style>
