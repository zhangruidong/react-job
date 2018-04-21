import React from 'react'
import {Redirect} from 'react-router-dom'
import {NavBar} from 'antd-mobile'
import {WhiteSpace,WingBlank,InputItem,List,Button,TextareaItem } from 'antd-mobile'
import {connect} from 'react-redux'

import AvatarSelector from '../../component/avatar-selector/avatar-selector'
import {update} from '../../redux/user.redux'

@connect(
    state => state.user,
    {update}
)

class BossInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state= {}
    this.handleChange = this.handleChange.bind(this)
    this.avatarSelector = this.avatarSelector.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }
  avatarSelector(data) {
    console.log(data)
    this.setState({avatar:data})
  }
  handleChange(key,value) {
    console.log(key+" "+value)
    this.setState({
      [key]:value
    })
  }
  handleSave() {
    console.log(this.state)
    this.props.update(this.state)
  }
  render() {
    const pathname = this.props.pathname
    return(
        <div>
          {this.props.redirectTo && this.props.redirectTo !==pathname? <Redirect to={this.props.redirectTo}/> : null}
          <NavBar mode={'dark'}>BOSS完善信息</NavBar>
          <WingBlank>
            <AvatarSelector data={this.state} avatarSelector ={this.avatarSelector}/>
            <List>
              <InputItem onChange={v =>this.handleChange('title',v)}>招聘职位</InputItem>
              <WhiteSpace/>
              <InputItem onChange={v =>this.handleChange('company',v)}>公司名称</InputItem>
              <WhiteSpace/>
              <InputItem onChange={v =>this.handleChange('money',v)}>职位薪资</InputItem>
              <WhiteSpace/>
              <TextareaItem
                  onChange={v =>this.handleChange('desc',v)}
                  title="职位要求"
                  rows ={3}
                  autoHeight
              />
              <WhiteSpace/>
            </List>
            <WhiteSpace/>
            <Button type={'primary'} onClick={this.handleSave}>保存</Button>
          </WingBlank>
        </div>
    )
  }
}

export default BossInfo