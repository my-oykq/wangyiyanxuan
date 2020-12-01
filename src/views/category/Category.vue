<template>
  <div>
      <category-top></category-top>
      <category-nav-bar></category-nav-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import CategoryNavBar from './childrenCpns/CategoryNavBar'
import CategoryTop from './childrenCpns/CategoryTop'
  export default {
    data () {
      return {
        
      }
    },
    components: {
      CategoryNavBar,
      CategoryTop
    },
    mounted () {
       this.$store.dispatch('getCategoryList')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>
