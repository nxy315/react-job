import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import { getUserList } from '../../redux/chatuser.redux'

@connect(
	state => state.chatuser,
	{ getUserList }
)

class Genius extends React.Component{
	constructor(props) {
		super(props)
		
	}

	componentDidMount() {
		this.props.getUserList('boss')
	}

	render() {
		return (
			<WingBlank>
				<WhiteSpace/>
				{
					this.props.userlist.map((v, i) => {
						return (
							v.avator ? (<div key={i}>
								<Card>
									<Card.Header
										title={v.user}
										thumb={require(`../../img/${v.avator}.png`)}
										thumbStyle={{width: 40, height: 40}}
										extra={<span>{v.title}</span>}
									></Card.Header>
									<Card.Body>
										{v.desc.split('\n').map((val, j) => {
											return <p key={j}>{val}</p>
										})}
									</Card.Body>
								</Card>
								<WhiteSpace/>
							</div>) : null
						)
					})
				}
				<WhiteSpace/>
			</WingBlank>
		)
	}
}

export default Genius