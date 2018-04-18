import axios from 'axios'
const REGISTER_SUCCESS ='REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initState = {
  isAuth: false,
  msg: '',
  user: '',
  pwd: '',
  type: ''
}

export function user(state = initState,action) {
  switch (action.type){
    case REGISTER_SUCCESS:
      return {...state,isAuth: true,...action.payload}
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