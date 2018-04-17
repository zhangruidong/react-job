import axios from 'axios';

const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'


// reducer
export function auth(state={isAuth:false,user:'zrd',age:18},action) {
  switch (action.type){
    case LOGIN:
      return {...state,isAuth:true}
    case LOGOUT:
      return {...state,isAuth:false}
    case USER_DATA:
      return {...state,user:action.payload.user,age:action.payload.age}
    default:
      return state
  }
}


// action
export function getUserData() {
  // dispatch 用来通知数据修改
  return dispatch => {
    axios.get('/one').then(res => {
      if(res.status === 200){
        console.log(res.data)
        user_data(res.data)
      }
    })
  }
}
export function user_data(data) {
  return {type:USER_DATA,payload:data}
}
export function login() {
  return {type:LOGIN}
}
export function logout() {
  return {type:LOGOUT}
}