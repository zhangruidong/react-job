import {combineReducers} from 'redux'
import {auth} from './redux.auth'
import {counter} from './redux.counter'

export default combineReducers({auth,counter})