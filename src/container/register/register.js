import React from 'react'
import Logo from '../../component/logo/logo'
import {WhiteSpace,WingBlank,InputItem,List,Button,Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../redux/user.redux'


// const Item = List.Item
const RadioItem = Radio.RadioItem

@connect(
    state=> state.user,
    {register}
)

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      user:'',
      pwd:'',
      repwd:'',
      type:''
    }
    this.handleRegister = this.handleRegister.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleRegister() {
    console.log(this.props)
    this.props.register(this.state)
  }
  handleChange(key,value) {
    this.setState({
      [key]:value
    })
  }
  render() {
    return (
        <div>
          <Logo/>
          <h1 style={{textAlign:'center'}}>Register</h1>
          <WingBlank>
            <List>
              <InputItem onChange={v =>this.handleChange('user',v)}>用户</InputItem>
              <WhiteSpace/>
              <InputItem onChange={v =>this.handleChange('pwd',v)}>密码</InputItem>
              <WhiteSpace/>
              <InputItem onChange={v =>this.handleChange('repwd',v)}>确认密码</InputItem>
              <WhiteSpace/>
              <RadioItem
                  checked={this.state.type === 'genius'}
                  onChange={() =>this.handleChange('type','genius')}
              >
                牛人
              </RadioItem>
              <WhiteSpace/>
              <RadioItem
                  checked={this.state.type === 'boss'}
                  onChange={() =>this.handleChange('type','boss')}
              >
                Boss
              </RadioItem>
            </List>
            <WhiteSpace/>
            {this.props.msg? <p style={{color:'red',textAlign:'center'}}>{this.props.msg}</p>:null}
            {this.props.msg? <WhiteSpace/>:null}
            <Button onClick={this.handleRegister} type={'primary'}>注册</Button>
          </WingBlank>
          
        </div>
    )
  }
}

export default Register