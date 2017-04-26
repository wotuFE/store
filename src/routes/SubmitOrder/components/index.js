import React, {
	Component
} from 'react'
import './index.scss'

class View extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			info
		} = this.props;
		return (
			<div className="submit-order">
				<ul className="list">
					{
						info.list && info.list.map((item) => {
							return <li key={item.id}>
								<div className="two">
									<img onClick={()=>{this.props.toDetail(item.id)}} src={item.imgUrl} />
									<div className="info">
										<p>{item.shopName}</p>
										<p>¥ {item.price.toFixed(2)}</p>
									</div>

								</div>
								<div className="three">x 2</div>
							</li>
						})
					}
				</ul>
				<div className="coupon">
					<div>优惠券</div>
					<div onClick={this.props.showCoupon} className="use">
					{info.discount?info.discount+'元':'不使用优惠券'}</div>
					<span onClick={this.props.showCoupon} className="arrow"></span>
				</div>
				<div className={info.showCoupon ? 'coupon-wrap' : 'coupon-wrap dn'}>
					<div className="box">
						<ul className="coupon-list">
							<li className={info.selectNum===-1?'select':''}
							onClick={()=>{this.props.selectCoupon(-1,0)}}>
								<span className="circle"></span>
								<p className="text">
									不使用优惠劵
								</p>
							</li>
							{
								info.couponList.length && info.couponList.map((item,i) => {
									return <li className={info.selectNum==i?'select':''} key={i} 
									onClick={()=>{this.props.selectCoupon(i,item)}}>
										<span className="circle"></span>
										<p className="text">
											<span>{item.amount}元(满{item.canUse}元可用)</span>
											<span>有效期至{item.date}</span>
										</p>
									</li>
								})
							}
							

						</ul>
						<p className="btn-box">
							<span onClick={this.props.cancel}>取消</span>
							<span onClick={this.props.sure}>确定</span>
						</p>
					</div>
				</div>
				<div className="way">
					<div>配送方式</div>
					<div onClick={() => { this.props.changeWay(1) }} className={info.way === 1 ? 'curr' : ''}>到店自取</div>
					<div onClick={() => { this.props.changeWay(2) }} className={info.way === 2 ? 'curr' : ''}>送货上门</div>
				</div>
				{
					info.way == 2 ?
						<div className="way inp">
							<div>请输入送货地址:</div>
							<input />
						</div> : ''
				}

				<div className="discount">
					<div>
						<span>订单金额</span>
						<span>¥ {info.orderMoney.toFixed(2)}</span>
					</div>
					<div>
						<span>优惠折扣</span>
						<span>¥ {info.discount.toFixed(2)}</span>
					</div>
				</div>
				<div className="submit-footer">
					<p>还需支付:  <span>¥ {info.needPay.toFixed(2)}</span></p>
					<p onClick={this.props.next}>提交订单</p>
				</div>
			</div>
		)
	}
}

export default View;