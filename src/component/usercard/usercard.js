import React from 'react'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import PropTypes from 'prop-types'

class UserCard extends React.Component{
    static propTypes = {
        userlist: PropTypes.array.isRequired
    }
    constructor(props) {
        super(props)
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
                                        {v.type == 'boss' ? <div>公司：{v.company}</div> : null}
										{v.desc.split('\n').map((val, j) => {
											return <p key={j}>{val}</p>
                                        })}
                                        {v.type == 'boss' ? <div>薪资：{v.money}</div> : null}
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

export default UserCard;