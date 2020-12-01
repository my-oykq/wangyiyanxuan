<template>
  <div id="app">
    <router-view></router-view>
    <min-tab-bar></min-tab-bar>
  </div>
</template>

<script type="text/ecmascript-6">
 import MinTabBar from 'content/mintabbar/MinTabBar'
// import MinTabbar from 'content/mintabbar/MinTabbar.vue'
  export default {
    components: {
      MinTabBar
    },
    name:'app'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
