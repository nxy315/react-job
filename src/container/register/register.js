import React from 'react'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio } from 'antd-mobile'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/user.redux'
import Logo from '../../component/logo/logo'

@connect(
  state => state.user,
  { register }
)

class Register extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius'
    }

    this.handleRegister = this.handleRegister.bind(this)
    this.login = this.login.bind(this)
  }

  /**
   * 跳转登录页面
   */
  login() {
    this.props.history.push('/login')
  }

  /**
   * 注册
   */
  handleRegister() {
    console.log(this.state)
    this.props.register(this.state)
  }

  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
        <Logo/>
        <h2 className="text-center">注册</h2>
        <WhiteSpace/>
        <WingBlank>
          <List>
            <InputItem
              onChange={v => this.handleChange('user', v)}
            >用户</InputItem>
            <WhiteSpace/>
            <InputItem
              onChange={v => this.handleChange('pwd', v)}
              type='password'
            >密码</InputItem>
            <WhiteSpace/>
            <InputItem
              onChange={v => this.handleChange('repeatpwd', v)}
              type='password'
            >确认密码</InputItem>
            <WhiteSpace/>
            <RadioItem
              onChange={v => this.handleChange('type', 'genius')}
              checked={this.state.type==='genius'}
            >牛人</RadioItem>
            <RadioItem
              onChange={v => this.handleChange('type', 'boss')}
              checked={this.state.type==='boss'}
            >BOSS</RadioItem>
          </List>
          <WhiteSpace/>
          {this.props.msg ? <p className='error-msg text-center'>{this.props.msg}</p> : null}
          <WhiteSpace/>
          <Button onClick={this.login} type='primary'>登录</Button>
          <WhiteSpace/>
          <Button onClick={this.handleRegister} type='primary'>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register