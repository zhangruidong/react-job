import axios from 'axios'
import {getRedirectPath} from '../utils'
const REGISTER_SUCCESS ='REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
  redirectTo:'',
  isAuth: false,
  msg: '',
  user: '',
  type: ''
}

export function user(state = initState,action) {
  switch (action.type){
    case REGISTER_SUCCESS:
      return {...state,isAuth: true,redirectTo:getRedirectPath(action.payload),...action.payload}
    case LOGIN_SUCCESS:
      return {...state,isAuth: true,redirectTo:getRedirectPath(action.payload),...action.payload}
    case LOAD_DATA:
      return {...state, ...action.payload}
    case ERROR_MSG:
      return {...initState,isAuth: false,msg:action.msg}
    default:
        return state
  }
}

function errorMsg(msg) {
  return {msg,type:ERROR_MSG}
}
function registerSuccess(payload) {
  return {payload,type:REGISTER_SUCCESS}
}
function loginSuccess(payload) {
  return {payload,type:LOGIN_SUCCESS}
}


export function register({user,pwd,repwd,type}) {
  if(!user || !pwd ){
    return errorMsg('用户名密码必须输入')
  }
  if(!type){
    return errorMsg('请选择注册类型')
  }
  if(pwd !== repwd){
    return errorMsg('两次输入的密码不一致')
  }
  return dispatch => {
    axios.post('/user/register',{user,pwd,type})
    .then(res =>{
      if(res.status === 200 && res.data.code ===0){
        dispatch(registerSuccess({user,pwd,type}))
      }else{
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
  
}

export function login({user,pwd}) {
  if(!user || !pwd ){
    return errorMsg('用户名密码必须输入')
  }
  return dispatch => {
    axios.post('/user/login',{user,pwd})
    .then(res =>{
      if(res.status === 200 && res.data.code ===0){
        dispatch(loginSuccess({user,pwd}))
      }else{
        dispatch(errorMsg(res.data.msg))
      }
    })
  }
}

export function loadData(payload) {
  return {type: LOAD_DATA, payload}
}