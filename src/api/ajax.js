import axios from 'axios'
// 统一默认暴露
export default function ajax(url, data={},type="GET"){
    return new Promise((resolve, reject) =>{
        // 定义全局的promise
        let promise
        // 1.判断请求方式
        if (type === 'GET') {
            promise = axios.get(url,{
                // get请求携带的参数
                params:data
            })
        }else{
            // post请求的参数是放在请求体中携带过去
            promise = axios.post(url, data)
        }
        // 2.判断数据的成功和失败,成功调用resolve(value)
        promise
         .then(response =>{
            console.log('请求成功')
            // 把参数带过去
            resolve(response.data)
            // 失败，提示一些异常信息
        }).catch(error =>{
            message.error('请求出错:' + error.message)
        })
    })
}