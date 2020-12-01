<template>
  <div class="gift_container">
    <div class="title_text">
      <p class="gift_name">- 新人专享礼 -</p>
    </div>
    <div class="gift_box">
      <div class="gift_left">
        <span class="name">新人专享礼包</span>
        <img src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png" alt="">
      </div>
      <div class="gift_right">
        <div class="gift_right_top">
          <div class="title">
           <p class="title_top">福利社</p>
           <span class="mini_title">今日特价</span>
          </div>
          <img  class="img_top" src="http://yanxuan.nosdn.127.net/aa2bbfa0e4f63160b454c67c911c9290.png" alt="">
        </div>
        <div class="gift_right_bottom">
          <div class="title">
            <p>新人拼团</p>
            <span class="mini1">1元起包邮</span>
          </div>
          <img class="img_bottom" src="http://yanxuan.nosdn.127.net/f608f7868d43c5ac67fc03189b07c589.png" alt="">
        </div>
      </div>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped>
.gift_container{
  padding-bottom: 25px;
  border-bottom: 18px solid #eeeeee;
}
.gift_name{
  height: 70px;
  line-height: 70px;
  text-align: center;
  font-size: 32px;
}
.gift_box{
  display: flex;
  margin-left: 20px;
}
.gift_left{
  flex: 5;
  width: 400px;
  height: 400px;
  text-align: center;
  /* margin-right: 5px; */
  background-color: #f9e9cf;
}
.name{
  display: block;
  margin: 25px 0;
  font-size: 32px;
}
.gift_left>img{
  width: 200px;
  height: 200px;
}
.gift_right{
  flex: 5;
  width: 350px;
  height: 350px;
  margin: 0 20px 10px 2px;
}
.gift_right_top, .gift_right_bottom{
  display: flex;

  background-color: #fbe2d3;
}
.gift_right_top{
  margin-bottom: 4px;
 
}
.img_top, .img_bottom{
  width: 200px;
  height: 200px;
}
.title{
  width: 100%;
  padding-left: 20px;
  margin-top: 20px;
  height: 80px;
  line-height: 40px;
}
.title>p{
  font-size: 32px;
  color: #333;
}
.mini_title{
  font-size: 13px;
  color: #666;
}
.mini1{
  font-size: 12px;
  background: #CBB693;
  height: 70px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  padding: 0 8px;
  border-radius: 4px;
}
 
</style>
