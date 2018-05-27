import React from 'react'
import { Link, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'
import App from './App'

function Erying() {
  return <h2>二营</h2>
}
function Qibinglian() {
  return <h2>骑兵连</h2>
}

@connect(
  state => state.auth,
  { logout }
)

class Dashboard extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    const redirectToLogin = <Redirect to='/login'/>
    const app = (
      <div>
        <ul>
          <li><Link to='/dashboard/'>一营</Link></li>
          <li><Link to='/dashboard/erying'>二营</Link></li>
          <li><Link to='/dashboard/qibinglian'>骑兵连</Link></li>
        </ul>
        {this.props.isAuth ? <button onClick={this.props.logout}>退出登录</button> : null}
        <Route path='/dashboard/' exact component={App}/>
        <Route path='/dashboard/erying' component={Erying}/>
        <Route path='/dashboard/qibinglian' component={Qibinglian}/>
      </div>
    )
    return this.props.isAuth ? app : redirectToLogin
  }
}

export default Dashboard