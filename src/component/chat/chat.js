import React from 'react'
import { List, InputItem, NavBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { getMsgList, sendMsg, recvMsg } from '../../redux/chat.redux'
import io from 'socket.io-client'
const socket = io('ws://localhost:8888')

@connect(
	state => state,
	{ getMsgList, sendMsg, recvMsg }
)

class Chat extends React.Component{
	constructor(props) {
		super(props)
		
		this.state = {
			text: '',
			msg: []
		}

		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		
		// socket.on('recvmsg', data => {
		// 	console.log(data)
		// 	this.setState({
		// 		msg: [...this.state.msg, data.text]
		// 	})
		// })
	}

	handleSubmit() {
		const from = this.props.user._id
		const to = this.props.match.params.user
		const msg = this.state.text
		console.log(from)
		console.log(to)
		this.props.sendMsg(from, to, msg)
		this.setState({
			text: ''
		})
	}

	render() {
		// this.props.match.parmas.user
		const user = this.props.match.params.user
		const Item = List.Item
		return (
			<div id='chat-page'>
				<NavBar mode='dark'>
					{this.props.match.params.user}
				</NavBar>
				{this.props.chat.chatmsg.map(v => {
					return v.from == user ? (
						<List key={v._id}>
							<Item>{v.content}</Item>
						</List>
					) : (
						<List key={v._id}>
							<Item
								
								className='chat-me'
							>{v.content}</Item>
						</List>
					)
					// return <p key={v._id}>{v.content}</p>
				})}
				<div className="stick-footer">
					<List>
						
						<InputItem
							placeholder="请输入"
							value={this.state.text}
							onChange={v => {
								this.setState({text: v})
							}}
							extra={<span onClick={this.handleSubmit}>发送</span>}
						></InputItem>
					</List>
				</div>
			</div>
			
		)
	}
}

export default Chat