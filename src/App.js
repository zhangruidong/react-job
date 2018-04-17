import React from 'react'
import {connect} from 'react-redux'
import {addGun,reduceGun,reduceGunAsync,addGunAsync} from './redux.counter'


// const mapStatetoProps = (state) =>{
//   return {num: state}
// }
// const actionCreators = {addGun,reduceGun,reduceGunAsync,addGunAsync}
//
// App = connect(mapStatetoProps,actionCreators)(App)

@connect(
    state => ({num:state.counter}),
    {addGun,reduceGun,reduceGunAsync,addGunAsync}
)

class App extends React.Component {
  render() {
    return(
        <div>
          <h1>现在有机枪{this.props.num}把</h1>
          <button onClick={ this.props.addGun }>Add</button>
          <button onClick={ this.props.reduceGun }>Reduce</button>
          <button onClick={ this.props.reduceGunAsync }>reduceGunAsync</button>
          <button onClick={ this.props.addGunAsync }>addGunAsync</button>
        </div>
    )
  }
}

export default App