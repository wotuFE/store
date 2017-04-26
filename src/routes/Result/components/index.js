import React, {
	Component
} from 'react'
import './index.scss'
import { Link } from 'react-router'

class View extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="result">
				<div className="top">
					<p></p>
				</div>
				{
					this.props.list.map((item) => {
						return <div key={item.id} className="item">
							<img src={item.imgUrl} />
							<div className="text">
								<p>{item.shopName}</p>
								<p>¥ {item.price}</p>
							</div>
							<span>x {item.prdNum}</span>
						</div>
					})
				}
				<div className="order">
					<p>订单号: {this.props.orderNo}</p>
					<p>查看订单</p>
				</div>
				<p className="back">
					<Link to="/">
						<button>返回首页</button>
					</Link>
				</p>
			</div>

		)
	}
}

export default View;