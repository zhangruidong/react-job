import React from 'react'
import Logo from '../../component/logo/logo'
import {WhiteSpace,WingBlank,InputItem,List,Button,Radio} from 'antd-mobile'

const Item = List.Item
const RadioItem = Radio.RadioItem

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      type:'genius'
    }
    this.register = this.register.bind(this)
    this.radioChange = this.radioChange.bind(this)
  }
  register() {
  
  }
  radioChange() {
    console.log('change')
  }
  render() {
    return (
        <div>
          <Logo/>
          <h1 style={{textAlign:'center'}}>Register</h1>
          <WingBlank>
            <List>
              <InputItem>用户</InputItem>
              <WhiteSpace/>
              <InputItem>密码</InputItem>
              <WhiteSpace/>
              <InputItem>确认密码</InputItem>
              <WhiteSpace/>
              <RadioItem checked={this.state.type === 'genius'} onChange={this.radioChange} >
                牛人
              </RadioItem>
              <WhiteSpace/>
              <RadioItem checked={this.state.type === 'boss'} onChange={this.radioChange}>
                Boss
              </RadioItem>
            </List>
            <WhiteSpace/>
            <Button onClick={this.register} type={'primary'}>注册</Button>
          </WingBlank>
        </div>
    )
  }
}

export default Register