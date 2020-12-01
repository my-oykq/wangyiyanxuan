import ajax from './ajax'
// 首页的数据请求
export const reqHomeData = () =>ajax('/homeData')
// 分类数据左侧的数据请求
export const reqCategoryList = () =>ajax('/categoryList')