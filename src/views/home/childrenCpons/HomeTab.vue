<template>
  <div class="container_wrapper">
    <div class="tab-wrapper" >
     <ul class="home-item" ref="homelist">
        <li v-for="(item, index) in homeData" 
        :key="index" :class="{active:index === currentIndex}" 
        @click="indexClick(index)" class="li-item">{{item}}</li>
     </ul>
       <span class="iconfont iconjiantou arrow"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bscroll from 'better-scroll'
  export default {
      data () {
          return {
             homeData:['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电','严选全球'],
             currentIndex:0
          } 
      },
    mounted () {
      this.$nextTick(() =>{
          new Bscroll('.tab-wrapper',{
          scrollX:true,
          click:true
        })
      })
    },
    methods: {
      indexClick(index){
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
    }
  }
</script>

<style scoped>

.tab-wrapper{
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-top: 30px;
}
.home-item{
  width: 1550px;
  height: 100%;
  display: flex;
}
.li-item{
  margin: 5px 10px;
  padding: 0 20px;
  height: 40px;
  text-align: center;
} 
.arrow{
  position: absolute;
  top: 0;
  right: 0;
  width: 90px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #ffffff;
}
.arrow>i{
  color: #cccccc;
}
.active{
  color: #DD1A21;
  border-bottom: 4px solid #DD1A21;
}
/* .line{
  width: 15px;
  height: 10px;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  margin-left: 10px;
 
} */
</style>
