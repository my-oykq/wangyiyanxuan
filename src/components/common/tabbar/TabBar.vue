<template>
  <div class="tab_bar">
      <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped>
 .tab_bar{
   display: flex;
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   background: #fff;
   border-top: 1px solid #eee;
 }
 
</style>
