// api接口统一管理
import { get, post } from './http'

// get请求封装
export const personalApi1 = () => get('/api/auth/user/?format=json') // 个人中心数据请求
export const personalApi2 = () => get('/api/auth/points/?format=json') // 个人中心数据请求
export const personalApi3 = () => get('/api/auth/sign/query/?format=json') // 个人中心签到数据请求

// -----------------------------------------------------
// *************长长的分哥线***********************
// -----------------------------------------------------

// post请求封装p为传递的数据参数 （）可去掉  例如可用于登陆功能验证账号密码
export const LoginApi = (p) => post('/rest-auth/login/', p) // 登录页请求
// import { apiGet， apiGet } from '@/request/api 页面中可以这样调用我们的api接口：
