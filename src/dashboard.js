import React from 'react'
import {Link,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './redux.auth'

import App from './App'
import Java from './java'
import Python from './python'

@connect(
    state => state.auth,
    {logout}
)

class Dashboard extends React.Component {
  render() {
    const MATCH = this.props.match
    const ele = (
            <div>
              <h1>dashboard</h1>
              <button style={{color: 'green'}} onClick={this.props.logout}>登出{this.props.user}</button>
              <ul>
                <li>
                  <Link to={`${MATCH.url}/`}>App</Link>
                </li>
                <li>
                  <Link to={`${MATCH.url}/java`}>Java</Link>
                </li>
                <li>
                  <Link to={`${MATCH.url}/python`}>Python</Link>
                </li>
              </ul>
              <Route path={`${MATCH.url}/`} exact component={App} />
              <Route path={`${MATCH.url}/java`} component={Java} />
              <Route path={`${MATCH.url}/python`} component={Python} />
            </div>
        )
    
    return this.props.isAuth? ele: <Redirect to={'/auth'}/>
  }
}

export default Dashboard