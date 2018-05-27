import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from "./Auth.redux";

@connect(
  state => state.auth,
  { login }
)

class Auth extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        { this.props.isAuth ? <Redirect to='/dashboard/'/> : null }
        <h2>你没有权限，需要登录才能看</h2>
        <button onClick={this.props.login}>登录{this.props.isAuth}</button>
      </div>
    )
  }
}

export default Auth