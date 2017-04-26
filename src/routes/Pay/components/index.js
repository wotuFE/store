import React, {Component} from 'react'
import './index.scss'

class View extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="pay">
            		<div className="top">
            			<div className="pepole">
            				<img src={require('../../../images/menber_img.png')}/>
            				<span></span>
            				<img src={require('../../../images/person_img2.png')}/>
            			</div>
            			<p className="tip">您正在想沃土外卖部支付现金</p>
            		</div>
            		<div className="pay-box">
            			<p><i>¥ | </i><input ref="money" placeholder="请输入金额"/><span className="reset">x</span></p>
            			<p className="line"></p>
            			<p>您需要支付¥ {this.props.needPay.toFixed(2)}</p>
            		</div>
            		<p className="pay2">
            			<button onClick={()=>{this.props.next(this.refs.money)}}>支付</button>
            		</p>
            </div>
        )
    }
}

export default View;