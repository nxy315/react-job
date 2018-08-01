import React from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../navlink/navlink'
import { Route, Switch } from 'react-router-dom'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'
import Boss from '../../container/boss/boss'
import Genius from '../../container/genius/genius'
import Msg from '../../component/msg/msg'
import User from '../../component/user/user'

@connect(
	state => state,
	{ getMsgList, recvMsg }
)

class Dashboard extends React.Component{
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.getMsgList();
		this.props.recvMsg();
	}

	
	render() {
		const { pathname } = this.props.location
		const user = this.props.user
		const navList = [
			{
				path: '/boss',
				text: '牛人',
				icon: 'boss',
				title: '牛人列表',
				component: Boss,
				hide: user.type == 'genius'
			},
			{
				path: '/genius',
				text: 'boss',
				icon: 'job',
				title: 'BOSS列表',
				component: Genius,
				hide: user.type == 'boss'
			},
			{
				path: '/msg',
				text: '消息',
				icon: 'msg',
				title: '消息列表',
				component: Msg
			},
			{
				path: '/me',
				text: '我',
				icon: 'user',
				title: '个人中心',
				component: User
			},
		]

		return (
			<div>
				<NavBar className='fixd-header' mode='dark'>{navList.find(v => v.path == pathname).title}</NavBar>
				<div style={{marginTop: 45, marginBottom: 45}}>
					<Switch>
						{
							navList.map(v => {
								return <Route key={v.path} path={v.path} component={v.component}/>
							})
						}
					</Switch>
				</div>
				<NavLinkBar data={navList}></NavLinkBar>
			</div>
		)
	}
}

export default Dashboard