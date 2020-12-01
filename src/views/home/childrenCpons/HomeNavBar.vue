<template>
  <div class="nav">
      <nav-bar>
          <div slot="left" class="home-text">
              <span>网易严选</span>
          </div>
          <div slot="center">
              <div class="search-input">
                  <i class="iconfont iconsousuo"></i>
                  <span>搜索商品，共26871款好物</span>
              </div>
          </div>
          <div slot="right" class="right-btn">
              <span>登录</span>
          </div>
      </nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import navBar from 'common/navbar/navBar'
  export default {
      components: {
          navBar
      }
  }
</script>

<style scoped>
.nav{
    /* position: fixed;
    top: 0;
    right: 0;
    left: 0; */
}
.home-text>span{
    font-weight: 600;
}
.search-input{
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    text-align: center;
    background: #eee;
    border-radius: 10px;
}
.right-btn{
    width: 80px;
    height: 30px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #DD1A21;
    margin-left: 5px;
    border-radius: 10px;
    border: 1px solid #DD1A21;
}
 
</style>
