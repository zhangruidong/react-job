import {combineReducers} from 'redux'
import {auth} from './redux/redux.auth'
import {counter} from './redux/redux.counter'

export default combineReducers({auth,counter})