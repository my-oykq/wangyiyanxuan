<template>
  <section class="recommend-conainer">
     <div class="re-header">
        <span class="title">人气推荐</span>
        <div class="re-right">
            <span class="title">
            更多
            <i class="iconfont iconicon-52 icon1"></i>
        </span>
        </div>
     </div>
     <div class="re-list">
         <!-- 因为数据从vuex拿，在请求渲染页面之前vuex的初始化时空的，因此用v-if判断是否有数据 -->
         <div class="re-list-top" v-if="popularItem[0]">
             <div class="list-l">
                  <img :src="popularItem[0].listPicUrl" class="o-l" alt="">
             </div>     
             <div class="list-r">
                <span class="b-r">APP特惠</span>
                <p class="ellipsis">{{popularItem[0].name}}</p>
                <p class="ellipsis">{{popularItem[0].simpleDesc}}</p>
                <p class="price">￥{{popularItem[0].retailPrice}}</p>
             </div>
         </div>
         <ul class="re-list-bottom">
             <li v-for="(item, index) in getPopularItem" :key="index" class="ol-i">
                 <img :src="item.listPicUrl" class="goods-img" alt="">
                 <div class="goods-name">
                     <span class="item-name">{{item.name}}</span>
                     <p class="goods-price">￥{{item.retailPrice}}</p>
                 </div>
             </li>
         </ul>
     </div>
  </section>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
      data () {
          return {
              
          }
      },
      computed: {
          ...mapState({
            //   拿到人气推荐的数据
             popularItem: state => state.home.popularItem
          }),
        //   拿到后三个数据,进行遍历
        getPopularItem(){
            // 取出popularItem数组，通过...形式,删除第一位元素，从4个数据当中删除所引为1
            return [...this.popularItem].splice(1, 4)
        }
        
      }
    
  }
</script>

<style scoped>
.recommend-conainer{
    border-bottom: 18px solid #eeeeee;
}
.goods-price{
    color: #b4282d;
    margin-top: 10px;
}
.item-name{
    height: 72px;
    line-height: 35px;
    font-size: 14px;
    padding: 10px 0;
}
.goods-name{
    display: flex;
    justify-content: center;
   
}
.ol-i{
    
    margin: 10px 10px;
}
.re-list-bottom{
    display: flex;
}
.goods-img{
    width: 216px;
    height: 216px;
    background: #f5f5f5;
}
.list-r{
    margin-top: 55px;
}
.price{
    color: #b4282d;
}
.ellipsis{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 10px 0;
}
.b-r{
    border: 1px solid #b4282d;
    font-size: 12px;
    color: #b4282d;
    text-align: center;
    padding: 0 6px;
    background: #ffffff;
    
}
.re-list-top{
    display: flex;
    justify-content: space-around;
}
.o-l{
    width: 280px;
    height: 280px;
}
.icon1{
    color: #ccc;
}
.title{
    font-size: 30px;
}
.re-right{
    flex: 1;
    text-align: right;
}
.re-header{
    display: flex;
    margin: 25px 25px;
}
 
</style>
