import React from 'react'
import { Grid, List } from 'antd-mobile'
import PropTypes from 'prop-types'

class AvatorSelector extends React.Component{
    static propTypes = {
        selectAvatar: PropTypes.func
    }
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        const avatorList = 'boy1,boy2,boy3,boy4,girl1,girl2,girl3,girl4'
                                .split(',')
                                .map(v => ({
                                    icon: require(`../../img/${v}.png`),
                                    text: v
                                }))
        const gridHeader = this.state.icon
                                ? (<div>
                                    <span>已选择通头像</span>
                                    <img style={{width: 20}} src={this.state.icon}/>
                                </div>)
                                : <div>请选择头像</div>
        return (
            <div>
                <List renderHeader={() => gridHeader}>
                    <Grid
                        data={avatorList} 
                        onClick={elm => {
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}
                    />
                </List>
            </div>
        )
    }
}

export default AvatorSelector