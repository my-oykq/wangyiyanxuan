import {reqCategoryList} from '../../api'
import {
    RECEIVE_CATEGORYLIST
} from '../mutation-types'
const state = {
    categoryList:[],//分类数据
}

const actions = {
  async getCategoryList({commit}){
       const result = await reqCategoryList() 
       console.log(result)
    }
}
const mutations = {

}
const getters = {

}
export default {
    state,
    actions,
    mutations,
    getters

}