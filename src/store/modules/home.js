import {reqHomeData} from "../../api"
import {
    RECEIVE_NAVLIST,
    RECEIVE_FLASHSALE,
    RECEIVE_NEWINTEM,
    RECEIVE_POPULARITEM,
    RECEIVE_CLASSIFYLIST
  } from '../mutation-types'
const state = {
    navList:[],//导航列表，居家生活列表
    flashSale:[],//限时购
    newIntem:[],//新品首发
    popularItem:[],//人气推荐
    classifyList:[],//分类列表
}
// 发送请求
const actions = {
   async getHomeData({commit}){
    const result = await reqHomeData();
    console.log(result)
    // 提交到mutations中直接修改stata中数据
    if(result.code === 0){ //成功
        // 居家生活,把反应数据保存下来
        const navlist = result.data.kingKongModule.kingKongList
        // 限时购
        const flashSale = result.data.flashSaleModule
        // 新品首发
        const newIntem = result.data.newItemList
        // 人气推荐
        const popularItem = result.data.popularItemList
        // 分类列表
        const classifyList = result.data.categoryModule
        // 提交，把需要修改的提交给mutations，把数据提交到mutations，直接修改
        commit(RECEIVE_NAVLIST, navlist);
        commit(RECEIVE_FLASHSALE, flashSale);
        commit(RECEIVE_NEWINTEM, newIntem);
        commit(RECEIVE_POPULARITEM, popularItem);
        commit(RECEIVE_CLASSIFYLIST, classifyList);
    }
   
   }
}
 const mutations = {
    [RECEIVE_NAVLIST](state, navList){
        // 需要参数就传什么
       state.navList = navList  
    },
    [RECEIVE_FLASHSALE](state, flashSale){
       state.flashSale = flashSale 
    },
    [RECEIVE_NEWINTEM](state, newIntem){
       state.newIntem = newIntem 
    },
    [RECEIVE_POPULARITEM](state,popularItem){
       state.popularItem = popularItem 
    },
    [RECEIVE_CLASSIFYLIST](state, classifyList){
       state.classifyList = classifyList 
    }
}
const getters = {

}
// 暴露出去
export default {
    state,
    mutations,
    actions,
    getters
  }