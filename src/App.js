import React from 'react';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { add, remove, addAsync } from './index.redux'

class App extends React.Component{ 
  render() {
    return (
      <div>
        <p>总共有{this.props.num}</p>
        <Button onClick={this.props.add} inline size='small' type='primary' style={{marginRight: '4px'}}>增加</Button>
        <Button onClick={this.props.remove} inline size='small' type='ghost' style={{marginRight: '4px'}}>减少</Button>
        <Button onClick={this.props.addAsync} inline size='small' type='primary'>增加async</Button>
      </div>)
  }
}
App = connect(
  state => ({num: state}),
  { add, remove, addAsync }
)(App)

export default App