<template>
  <div id="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped>
 #nav-bar{
     display: flex;
     height: 44px;
     margin-top: 20px;
     justify-content: center;
     align-items: center;
     padding: 0 10px;
     
 }
 .left{
     flex: 2;
 }
 .center{
     flex: 6;
 }
 .right{
     flex: 1;
 }
</style>
