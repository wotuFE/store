import React, {Component} from 'react'
import './index.scss'

class View extends Component {
    constructor(props) {
        super(props);
    }
    render() {
		const { info } = this.props;
		if (!info) {
			return <div>数据加载中,请稍后......</div>
		}
        return (
            <div className="order">
                <img src={require('../../../images/pay_banner.png')}/>
                <ul>
                		<li>
                			<span>订单号</span>
                			<span>{info.orderNo}</span>
                		</li>
                		<li>
                			<span>订单金额</span>
                			<span>¥ {info.orderMoney.toFixed(2)}</span>
                		</li>
                		<li>
                			<span>优惠券折扣</span>
                			<span>¥ {info.discount.toFixed(2)}</span>
                		</li>
                		<li className="need-pay">
                			<span>还需支付</span>
                			<span>¥ {info.needPay.toFixed(2)}</span>
                		</li>
                </ul>
                <p className="btn">
                		<button onClick={this.props.next}>微信安全支付</button>
                </p>
            </div>
        )
    }
}

export default View;