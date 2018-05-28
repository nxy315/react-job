import { combineReducers } from 'redux'
import { user } from './redux/user.redux' //reducer
import { chatuser } from './redux/chatuser.redux' //reducer

export default combineReducers({ user, chatuser })


