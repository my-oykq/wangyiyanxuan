<template>
  <div class="home-flash">
      <div class="header">
          <span>限时购</span>
          <div class="time-down">
              <span ref="timeHour" class="time">{{hour &lt; 10 ? '0' + hour : hour}}</span>
              <span>:</span>
              <span ref="timeMinute" class="time">{{minute &lt; 10 ? '0' +minute : minute}}</span>
              <span>:</span>
              <span ref="timeSecond" class="time">{{second &lt; 10 ? '0' + second : second}}</span>
          </div>
          <div class="re-right">
                <span class="title">
                更多
                <i class="iconfont iconicon-52 icon1"></i>
                </span>
          </div>
      </div>
      <div class="home-container">
          <ul class="flash-ul">
              <li class="flash-item" v-for="(item, index) in flashSale.itemList" :key="index">
                  <img :src="item.picUrl" alt="" class="flash-img">
                  <div class="goods-price">
                      <span class="n-p">￥{{item.activityPrice}}</span>
                      <!-- 老价格 -->
                      <span class="r-p">￥{{item.originPrice}}</span>
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
              hour: 2,//小时
              minute: 59,//分钟
              second: 59,//秒
          }
      },
      computed: {
        //   拿到限时购请求的数据
        ...mapState({
            flashSale: state => state.home.flashSale
        })
      },
      mounted () {
          this._timeDown()
      },
      methods: {
          _timeDown(){
            //   setInterval,1s反复执行某段代码
              this.intervalId = setInterval(() =>{
                //   1.当秒数减少到0 时，重新置为 0 ，分钟减1
                if(this.second > 0){
                    //2. 如果 second = 59，那就 -- ，59,58,57,56,55....
                    this.second --    
                }else {
                    // 3.秒数小于0或者等于 0时，
                    if(this.minute){
                        // 5.如果分钟数有值，就重置秒数，从59开始计算，同时分钟减1
                        this.second = 59;
                        this.minute--
                        if(this.minute <= 0 && this.hour === 0){
                            this.minute = 0;
                        }
                    }else if( this.hour){
                        // 4.如果分钟数为0 并且小时数不为0， x:0:xx 然后秒数和分钟数都置为初始值，同时小时减1
                        this.second = 59;
                        this.minute = 59;
                        this.hour--;
                        // 6.小时数减到 0 时，直接设为0
                        if(this.hour <=0){
                            this.hour = 0;
                        }
                    }
                }
                // 7.当小时，分钟， 秒数 都不大于 0 时停止计时器
               
                if(!this.hour && !this.minute && !this.second){
                    clearInterval(this.intervalId)
                }
              },1000)


              
          }
      },
      beforeDestroy () {
      clearInterval(this.intervalId);
    }
  }
</script>

<style scoped>
.home-flash{
    border-bottom: 18px solid #eeeeee;
}
.n-p{
    color: #b4282d;
}
.goods-price{
    margin-top: 10px;
   font-size: 25px;
}
.flash-item{
    width: 216px;
    height: 270px;
    margin: 0 10px 0;
}
.flash-ul{
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px 0 20px;
}
.flash-img{
    width: 216px;
    height: 216px;
    background: #eeeeee;
}
.r-p{
    color: #777;
    margin-left: 5px;
    text-decoration: line-through;
}
.time{
    background: #333;
    color: #ffffff;
    font-size: 13px;
    padding: 0 8px;
    border-radius: 5px;
    margin: 0 16px;
}
.header{
    display: flex;
    margin: 25px;
    font-size: 34px;
}
.time-down{
    margin-left: 10px;
}
.re-right{
    flex: 1;
    text-align: right;
}
.icon1{
    color: #cccccc;
}
 
</style>
