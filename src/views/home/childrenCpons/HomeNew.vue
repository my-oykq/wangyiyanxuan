<template>
  <div class="home-new">
     <div class="new-header">
         <span>新品首发</span>
         <div class="new-right">
             <span>更多</span>
             <i class="iconfont iconicon-52 icon1"></i>
         </div>
     </div>
     <div class="new-bottom">
         <ul class="new-list">
             <li class="new-item" v-for="(item, index) in getNewItem" :key="index">
                 <img :src="item.listPicUrl" alt="" class="new-img">
                 <div class="goods-name">
                     <span class="name">{{item.name}}</span>
                     <span class="price">￥{{item.retailPrice}}</span>
                 </div>
             </li>
         </ul>
     </div>
  </div>
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
              newIntem: state => state.home.newIntem
          }),
          getNewItem(){
            //   从0索引开始取出6条数据
              return [...this.newIntem].splice(0, 6)
          }
      }
  }
</script>

<style scoped>
.home-new{
    padding-bottom: 10px;
    border-bottom: 18px solid #eeeeee;
}
.price{
    color: #b4282d;
}
.name{
    height: 70px;
    line-height: 30px;
}
.goods-name{
    font-size: 25px;
    font-weight: 600;
}
.new-item{
    width: 216px;
    height: 270px;
    margin: 0 10px 10px;
}
.new-bottom{
     padding: 25px 20px;
}
.new-list{
    display: flex;
    flex-wrap: wrap;
}
.new-img{
    width: 216px;
    height: 216px;
    background: #eeeeee;
}
.new-right{
    flex: 1;
    text-align: right;
}
.new-header{
    padding: 25px 10px ;
    display: flex;
    font-size: 34px;
}
 
</style>
