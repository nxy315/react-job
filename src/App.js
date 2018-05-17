import React from 'react'
import { Button } from 'antd-mobile'

class App extends React.Component{ 
  render() {
    const boss = '尼宵阳'
    return (
      <div>
        <h2>独立团，团长{boss}</h2>
        <一营 老大='王艳芳'></一营>  
        <Button type='primary'>确定</Button>
      </div>)
  }
}

class 一营 extends React.Component{
  render() {
    return <h2>一营营长，{this.props.老大}</h2>
  }
}

export default App