import axios from '@/utils/http.js'

//登录接口
export const login = (params) =>  axios.post('/api/login',params);
//注册接口
export const register = (params) =>  axios.post('/api/register',params);




// function login (params){
//     return axios.post('/')
// }