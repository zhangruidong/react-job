import React from 'react'
import {Redirect} from 'react-router-dom'
import Logo from '../../component/logo/logo'
import {WhiteSpace,WingBlank,InputItem,List,Button} from 'antd-mobile'
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'

// const Item = List.Item

@connect(
    state=> state.user,
    {login}
)

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      user:'',
      pwd:''
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  register() {
    this.props.history.push('/register')
  }
  handleLogin() {
    console.log(this.state)
    this.props.login(this.state)
  }
  handleChange(key,value) {
    this.setState({
      [key]:value
    })
  }
  render() {
    return (
        <div>
          {this.props.redirectTo? <Redirect to={this.props.redirectTo}/> : null}
          <Logo/>
          <h1 style={{textAlign:'center'}}>Login</h1>
          
          <WingBlank className={'login-box'}>
            <List>
              <InputItem onChange={v =>this.handleChange('user',v)}>用户</InputItem>
              <WhiteSpace/>
              <InputItem onChange={v =>this.handleChange('pwd',v)}>密码</InputItem>
            </List>
            <WhiteSpace/>
            {this.props.msg? <p style={{color:'red',textAlign:'center'}}>{this.props.msg}</p>:null}
            {this.props.msg? <WhiteSpace/>:null}
            <Button type={'primary'} onClick = {this.handleLogin}>登录</Button>
            <WhiteSpace/>
            <Button onClick={this.register} type={'primary'}>注册</Button>
          </WingBlank>
        </div>
    )
  }
}

export default Login