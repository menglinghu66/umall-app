import axios from "axios"
import qs from "qs"

axios.interceptors.response.use(res => {
    console.log("本次请求地址：" + res.config.url);
    console.log(res);
    return res
})
//首页商品数据
export const reqHomeGoods = () => {
    return axios({
        url: "/api/getindexgoods",
        method: "get"
    })
}
//注册
export const reqRegister = (user) => {
    return axios({
        url: "/api/register",
        method: "post",
        data: qs.stringify(user)
    })
} 