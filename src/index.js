import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'


import './config'
import reducers from './reducer'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import BossInfo from './container/bossinfo/bossinfo'

let store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));


ReactDOM.render(
    <Provider  store={store}>
      <BrowserRouter>
        <div>
          <AuthRoute/>
          <Route path={'/login'} component={Login}/>
          <Route path={'/register'} component={Register}/>
          <Route path={'/geniusinfo'} component={GeniusInfo}/>
          <Route path={'/bossinfo'} component={BossInfo}/>
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

