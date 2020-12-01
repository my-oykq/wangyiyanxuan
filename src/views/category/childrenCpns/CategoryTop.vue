<template>
    <!-- <nav-bar>
        <div slot="center" class="cate-container">
            <div class="cate-main">
                <div class="catrgory-input">
                    <i class="iconfont iconsousuo"></i>
                    <span>搜索商品，共xxxxx款好物</span>
                </div>
            </div>
        </div>
    </nav-bar> -->
    <div class="cate-container">
        <div class="catrgory-input">
             <i class="iconfont iconsousuo"></i>
              <span>搜索商品，共xxxxx款好物</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
// import navBar from 'common/navbar/navBar'
  export default {
      components:{
        //   navBar
      }
  }
</script>

<style scoped>
.cate-container{
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid #eee;
}

.catrgory-input{
   color: #666;
   background: #eee;
   display: flex;
   justify-content: center;
   align-items: center;
   text-align: center;
   margin: 0 auto;
   width: 90%;
   height: 56px;
   margin-top: 20px;
   border-radius: 8px;
}

 
</style>
