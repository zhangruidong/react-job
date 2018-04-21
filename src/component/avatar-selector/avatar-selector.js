import React from 'react'
import PropTypes from 'prop-types'
import {Grid,List} from 'antd-mobile'

class AvatarSelector extends React.Component {
  static propTypes = {
    selectAvatar: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)
    this.state = {...this.props.data}
  }
  render() {
    const avatarList ='boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(',').map(item => ({
      icon: require(`../images/${item}.png`),
      text: item
    }))
    const gridHeader = this.state.icon? (
        <div>
          <span>已选择头像</span>
          <img style={{width:20}} src={this.state.icon} alt=""/>
        </div>
    ): '请选择头像'
    return (
        <div>
          <List renderHeader={() =>gridHeader}>
            <Grid columnNum ={4}
                  data={avatarList}
                  onClick = {elm => {
                    this.props.avatarSelector(elm.text)
                    this.setState({...elm})
                  }}
            />
          </List>
          
        </div>
        
        
    )
  }
}

export default AvatarSelector