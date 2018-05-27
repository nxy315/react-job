import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux' //redux原生方法
import thunk from 'redux-thunk' //处理异步
import { Provider } from 'react-redux' //最外层注入状态，方便管理
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'
import reducer from './reducer'
import './config'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import './common.css'

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension():f=>f
))

function Boss() {
  return <h2>boss页面</h2>
}

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute/>
        <Route path='/boss' component={Boss}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)



