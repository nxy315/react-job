import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'
import Logo from '../../component/logo/logo'
// import axios from "axios/index";

@connect(
  state => state.user,
  { login }
)

class Login extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: ''
    }
    this.register = this.register.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  /**
   * 登录
   */
  handleLogin() {
    this.props.login(this.state)
  }
  
  /**
   * 跳转注册页面
   */
  register() {
    this.props.history.push('/register')
  }

  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }

  render() {
    return (
      <div>
        {(this.props.redirectTo && this.props.redirectTo != '/login') ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo/>
        <h2 className="text-center">登录</h2>
        <WhiteSpace/>
        <WingBlank>
          <List>
            <InputItem
              onChange={v => this.handleChange('user', v)}
            >用户</InputItem>
            <InputItem
              type='password'
              onChange={v => this.handleChange('pwd', v)}
            >密码</InputItem>
          </List>
          <WhiteSpace/>
          {this.props.msg ? <p className='error-msg text-center'>{this.props.msg}</p> : null}
          <WhiteSpace/>
          <Button onClick={this.handleLogin} type='primary'>登录</Button>
          <WhiteSpace/>
          <Button onClick={this.register} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login