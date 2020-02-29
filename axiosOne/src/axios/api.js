// api接口统一管理
import { get, post } from './http'

// get请求封装
export const apiGet = () => get('api/...')

// -----------------------------------------------------
// *************长长的分哥线***********************
// -----------------------------------------------------

// post请求封装
export const apiPost = (p) => post('api/...', p) // p为传递的数据参数 （）可去掉  例如可用于登陆功能验证账号密码

// import { apiGet， apiGet } from '@/request/api 页面中可以这样调用我们的api接口：
