import React from 'react'
import Logo from '../../component/logo/logo'
import {WhiteSpace,WingBlank,InputItem,List,Button} from 'antd-mobile'

const Item = List.Item

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.register = this.register.bind(this)
  }
  register() {
    this.props.history.push('/register')
  }
  render() {
    return (
        <div>
          <Logo/>
          <h1 style={{textAlign:'center'}}>Login</h1>
          
          <WingBlank className={'login-box'}>
            <List>
              <InputItem>用户</InputItem>
              <WhiteSpace/>
              <InputItem>密码</InputItem>
            </List>
            <WhiteSpace/>
            <Button type={'primary'}>登录</Button>
            <WhiteSpace/>
            <Button onClick={this.register} type={'primary'}>注册</Button>
          </WingBlank>
        </div>
    )
  }
}

export default Login