// api接口统一管理
import { get, post } from './http'

// get请求封装
export const personalApi1 = () => get('/api/auth/user/?format=json') // 个人中心数据请求
export const personalApi2 = () => get('/api/auth/points/?format=json') // 个人中心数据请求
export const personalApi3 = () => get('/api/auth/sign/query/?format=json') // 个人中心签到数据请求
export const singMsgApi = () => get('/api/auth/sign/in/?format=json') // 个人中心签到Post请求
export const luckChaceApi = () => get('/api/lucky_everyday/lottery/?format=json') // 抽奖中心抽奖次数获取
export const luckRulingApi = () => get('/api/lucky_everyday/rolling_letter/?format=json&page_size=30') // 抽奖中心抽奖次数获取

// -----------------------------------------------------
// *************长长的分哥线***********************
// -----------------------------------------------------

// post请求封装p为传递的数据参数 （）可去掉  例如可用于登陆功能验证账号密码
export const LoginApi = (p) => post('/rest-auth/login/', p) // 登录页请求
export const luckResApi = () => post('/api/lucky_everyday/lottery/?format=json') // 抽奖中心规则请求

// import { apiGet， apiGet } from '@/request/api 页面中可以这样调用我们的api接口：
