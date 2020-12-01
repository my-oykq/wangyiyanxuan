<template>
  <div class="home-section">
      <ul class="nav-bar">
          <li>
              <img src="~assets/img/navbar/wangyi.png" alt="" class="item_img">
              <span class="text">网易自营品牌</span>
          </li>
          <li>
              <img src="~assets/img/navbar/2.png" alt="" class="item_img">
              <span class="text">30天无忧退货</span>
          </li>
          <li>
              <img src="~assets/img/navbar/mony.png" alt="" class="item_img">
              <span class="text">48小时快速退款</span>
          </li>
          
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
      data () {
          return {
          }
      }
  }
</script>

<style scoped>
.home-section{
    position: relative;
    height: 50px;
}
.nav-bar{
    position: absolute;
    left: 0;
    top:35%;
    right: 0;
    bottom: -60%;
    display: flex;
    align-items: center;
    justify-content: space-around;
 }
 .bav_img{
    width: 50px;
    height: 50px;
    display: inline-block; 
 }
 .item_img{
     width: 30px;
     height: 30px;
     /* 垂直对齐 */
     vertical-align: middle;
     padding-right: 10px;
 }
 .text{
     font-size: 25px;
 }
</style>
