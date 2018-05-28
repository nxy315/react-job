import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux' //redux原生方法
import thunk from 'redux-thunk' //处理异步
import { Provider } from 'react-redux' //最外层注入状态，方便管理
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'
import reducer from './reducer'
import './config'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import Login from './container/login/login'
import Register from './container/register/register'
import AuthRoute from './component/authroute/authroute'
import Dashboard from './component/dasboard/dasboard'
import './common.css'

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f=>f
))

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute/>
        <Switch>
          <Route path='/bossinfo' component={ BossInfo }/>
          <Route path='/geniusinfo' component={ GeniusInfo }/>
          <Route path='/login' component={ Login }/>
          <Route path='/register' component={ Register }/>
          <Route component={ Dashboard }></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)



