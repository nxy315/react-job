import { combineReducers } from 'redux'
import { user } from './redux/user.redux' //reducer
import { chatuser } from './redux/chatuser.redux' //reducer
import { chat } from './redux/chat.redux'

export default combineReducers({ user, chatuser, chat })


