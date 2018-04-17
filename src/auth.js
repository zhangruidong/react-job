import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {login,getUserData} from './redux.auth'

@connect(
    state => state.auth,
    {login,getUserData}
)

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      data:{}
    }
  }
  componentDidMount() {
    this.props.getUserData()
  }
  render() {
    return (
        <div>
          <h2>我的名字是：{this.props.user}</h2>
          <h2>年龄：{this.props.age}</h2>
          {this.props.isAuth? <Redirect to={'./dashboard'}/> : null}
          <p>登录获取访问权限</p>
          <button onClick={this.props.login}>login</button>
        </div>
    )
  }
}

export default Auth