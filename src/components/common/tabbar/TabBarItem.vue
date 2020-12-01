<template>
  <div id="tabbar_item" @click="tabClick">
      <!-- 未激活 取反 -->
      <div class="item_icon" v-show="!isActive"><slot name="icon"></slot></div>
        <!--激活 显示颜色 -->
      <div class="item_active_icon" v-show="isActive"><slot name="active-icon"></slot></div>
      <!-- 文字 -->
      <div class="item_text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    // 从父组件mintabbar组件传递过来的参数
    props:{
      link:{
        type:String,
        required: true
      }
    },
    computed: {
      isActive(){
        // 点击的路径查找一样那么就激活
       return this.$route.path.indexOf(this.link) !== -1
      },
      activeStyle(){
        // 动态改变字体的颜色，通过style
        return this.isActive? {'color':'#DD1A21'}: {}
      }
    },
    methods: {
      tabClick(){
        // 路由跳转
        this.$router.replace(this.link)
      }
    }
  }
</script>

<style scoped>
 #tabbar_item{
   flex: 1;
   height: 90px;
   text-align: center;
   margin-top: 10px;
 }
 .item_icon img, .item_active_icon img{
   width: 40px;
   height: 40px;
 }

 .item_text{
   margin-top: 3px;
   font-size: 14px;
 }
</style>
