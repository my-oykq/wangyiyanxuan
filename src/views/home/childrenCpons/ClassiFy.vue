<template>
  <section class="classify-container">
    <div class="classify-top" v-for="(classify, index) in classifyList" :key="index">
        <img :src="classify.titlePicUrl" alt="标题图片" class="title-img">
        <div class="classify-bottom" >
            <ul class="classify-list" ref="classify">
                <li class="classify-item" v-for="(item, index) in classify.itemList" :key="index">
                    <img :src="item.listPicUrl" alt="商品图片" class="item-img">
                    <div class="goods-name">
                        <span class="name">{{item.name}}</span>
                        <span class="goods-price">￥{{item.retailPrice}}</span>
                    </div>
                </li>
            </ul>
        </div> 
    </div>
     
  </section>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
      data () {
          return {
              scroll:null
          }
      },
      computed: {
          ...mapState({
              classifyList: state => state.home.classifyList
          })
      },
      mounted () {
        // this.$nextTick(() =>{
        //   this.scroll = new Bscroll(this.$refs.classify,{
        //     scrollX:true,
        //     click:true
        //     })
        // })
      }
  }
</script>

<style scoped>
.classify-bottom{
    margin-top: 20px;
    width: 100%;
}
.goods-name{
    font-size: 14px;
    line-height: 70px;
    line-height: 30px;
}
.name{
    margin-left: 10px;
    /* 让文字出现...形式 */
    font-size: 12px;
    overflow: hidden; 
    text-overflow: ellipsis;
    white-space: wrap;
    /* margin: 10px 0; */
}
.classify-item{
    width: 160px;
    height: 180px;
    margin: 0 20px 40px 0;
   
    /* height: 100px; */
}
.classify-list{
    display: flex;
    flex-wrap: wrap;
    padding: 0 15px 0;
    /* padding-bottom: 45px; */
    /* width: 1650px; */
    /* height: 100%; */
}
.title-img{
    width: 100%;
    height: 300px;
}
.item-img{
    width: 160px;
    height: 160px;
    background: #eeeeee;
}
.classify-top{
    margin-top: 50px;
}
 
</style>
