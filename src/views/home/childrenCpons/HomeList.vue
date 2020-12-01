<template>
  <div class="list_container">
          <ul class="list_item">
              <li v-for="(item, index) in navList" :key="index" class="list_li">
                  <img :src="item.picUrl" alt="" class="list_img">
                  <span class="list_text">{{item.text}}</span>
              </li>
          </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from "vuex"
  export default {
      data () {
          return {
              
          }
      },
      computed: {
        //   通过辅助函数，拿到vuex中state中的数据
          ...mapState({
              navList: state => state.home.navList
          })
      }
  }
</script>

<style scoped>
.list_container{
   margin-top: 20px;
   border-bottom: 18px solid #eee; 
    
}

.list_item{
    width: 100%;
    height: 350px;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}
.list_li{
    flex: 1;
    /* float: left; */
    width: 110px;
    height: 156px;
    /* 上 右 下 */
    margin: 10px 20px 5px;
    display: flex;
    flex-direction: column;
    
}
.list_img{
    width: 110px;
    height: 110px;
}
.list_text{
    margin-top: 15px;
    font-size: 24px;
} 
</style>
