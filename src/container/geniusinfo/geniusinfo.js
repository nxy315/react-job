import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { InputItem, NavBar, TextareaItem, Button, WhiteSpace } from 'antd-mobile'
import { update } from '../../redux/user.redux'
import AvatorSelector from '../../component/avator-selector/avator-selector'

@connect(
    state => state.user,
    { update }
)

class GeniusInfo extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: ''
        }
    }

    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    render(){
        const path = this.props.location.pathname
        const redirect = this.props.redirectTo
        return (
            <div>
                {redirect && path !== redirect ? <Redirect to={this.props.redirectTo}/> : null}
                <NavBar mode='dark'>牛人完善信息页面</NavBar>
                <AvatorSelector
                    selectAvatar={(imgname) => {
                        this.setState({
                            avator: imgname
                        })
                    }}
                ></AvatorSelector>
                <InputItem onChange={v => this.onChange('title', v)}>求职岗位</InputItem>
                <TextareaItem
                    title="个人简介"
                    onChange={v => this.onChange('desc', v)}
                    rows={3}
                    autoHeight 
                />
                <WhiteSpace/>
                <Button
                    onClick={() => {
                        this.props.update(this.state)
                    }}
                    type='primary'
                >保存</Button>
            </div>
        )
    }
}

export default GeniusInfo