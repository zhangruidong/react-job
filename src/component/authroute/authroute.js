import React from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

@withRouter

class AuthRoute extends React.Component {
  componentDidMount() {
    const publicList =['/login','/register']
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname)>-1)return
    axios.get('/user/info').then(res => {
      if(res.status === 200){
        if(res.data.code ===0){  // 没有登录信息 => 重定向
          this.props.history.push('/login')
        }else {
        
        }
      }
    })
  }
  render() {
    return null
  }
}

export default AuthRoute