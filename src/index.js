import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import './config'


import Auth from './auth'
import Dashboard from './dashboard'
import reducers from './reducer'

let store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));


ReactDOM.render(
    <Provider  store={store}>
      <BrowserRouter>
        <div>
          <Switch>
            <Route path={'/auth'} component={Auth}></Route>
            <Route path={'/dashboard'} component={Dashboard}></Route>
            <Redirect to={'/dashboard'}></Redirect>
          </Switch>
          
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

