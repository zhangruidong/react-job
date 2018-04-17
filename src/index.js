import React from 'react'
import ReactDOM from 'react-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import './config'


import reducers from './reducer'

let store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension?window.devToolsExtension():f=>f
));


ReactDOM.render(
    <Provider  store={store}>
      <BrowserRouter>
        <div>
          <h1>hello my App!</h1>
          
        </div>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)

