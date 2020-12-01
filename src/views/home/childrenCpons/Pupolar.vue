<template>
  <section class="popular-container">
     <p class="name">类目热销榜</p>
     <div class="popular-top">
         <ul class="popular-item">
             <li class="popular-li list1">
                 <span>
                     热销榜
                     <span class="line"></span>
                 </span>
                 <img class="popular-img" src="http://yanxuan.nosdn.127.net/9a33f08a3b0f5c06fdf4c586d51b2f7c.png" alt="">
             </li>
             <li class="popular-li list2">
                 <span>
                     好评榜
                     <span class="line"></span>
                 </span>
                 <img class="popular-img" src="http://yanxuan.nosdn.127.net/1fa535e25330987297a27e63c27db2e6.png" alt="">
             </li>
         </ul>
     </div> 
     <div class="popular-bottom">
         <ul class="bottom-item">
             <li v-for="item in popularList" :key="item.id" class="bottom-li">
                 <span class="text">{{item.info}}</span>
                 <img :src="item.imgUrl" class="bottom-img" alt="">
             </li>
         </ul>
     </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
      data () {
          return {
             popularList:[
                 {id:0,info:"居家生活榜",imgUrl:"http://yanxuan.nosdn.127.net/6ae6ced6f3fd805d9e00b4f29a34efd3.png?"},
                 {id:1,info:"服饰鞋包榜",imgUrl:"http://yanxuan.nosdn.127.net/d84c728c164a77a8c5f0ca153d21fe69.png?"},
                 {id:2,info:"美食酒水榜",imgUrl:"http://yanxuan.nosdn.127.net/59eb7e52ab114c894a8179bc2991122b.png?"},
                 {id:3,info:"数码家电榜",imgUrl:"http://yanxuan.nosdn.127.net/cf86ce7b36cc90f5c9b1cbbc5eafd737.png?"},
                 {id:4,info:"个护清洁榜",imgUrl:"http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?"},
                 {id:5,info:"母婴亲子榜",imgUrl:"http://yanxuan.nosdn.127.net/ae7f88bdae80b15ac656b0c76f356179.jpg?"},
                 {id:6,info:"运动旅行榜",imgUrl:"http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?"},
                 {id:7,info:"全球特色榜",imgUrl:"http://yanxuan.nosdn.127.net/83e9f1b99b484885f88b5c5443f87cec.png?"},
             ]
          }
      }
  }
</script>

<style scoped>
.popular-container{
    border-bottom: 18px solid #eeeeee;
}
.popular-bottom{
    width: 100%;
}
.bottom-item{
    display: block;
    
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
.text{
    font-size: 22px;
    color: #333;
}
.bottom-li{
    width: 160px;
    height: 180px;
    margin: 0 15px 10px 0;

    background-color: #F5F5F5;
    text-align: center;
    padding-top: 10px;
    /* display: flex;
    flex-direction: column; */
}
.bottom-img{
    width: 120px;
    height: 120px;
}
.line{
    display: block;
    width: 50px;
    height: 4px;
    background-color: #333;
    margin-top: 10px;
}
.popular-container{
    padding: 0 20px 20px 30px;
    
}
.name{
    height: 100px;
    line-height: 100px;
    font-size: 32px;
}
.popular-item{
    display: flex;
}
.popular-li{
    width: 340px;
    height: 200px;
    display: flex;
    padding: 0 20px;
    align-items: center;
}
.popular-img{
    width: 200px;
    height: 200px;
}
.list1{
    background: #F9F3E4;
    margin: 0 20px 10px 0;
}
.list2{
    background: #EBEFF6;
}
 
</style>
