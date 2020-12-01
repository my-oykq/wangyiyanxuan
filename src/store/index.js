/* 最核心的模块 */
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import home from './modules/home'
import categorylist from './modules/categorylist'
Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    getters,
    modules:{
       home,
       categorylist
    }
})