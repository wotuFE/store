import React, {
	Component
} from 'react'
import View from '../components'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import { browserHistory } from 'react-router'
import { baseUrl } from '../../../common/config'
import { get, post } from '../../../common/client'
import { getOrderResult } from '../modules'

class Container extends Component {
	constructor(props) {
		super(props);
		// 没选择商品
		if (!props.totalMoney) {
			browserHistory.push('/shoppingCar');
		}
		this.state = {
			// 配送方式,默认是1
			way: 1,
			orderMoney: this.props.totalMoney,
			needPay: this.props.totalMoney,
			discount: 0,
			// 显示优惠券列表
			showCoupon: false,
			list: this.props.list,
			selectNum: -1,
			discount: 0,
			couponList: []
		}
		this.changeWay = this.changeWay.bind(this);
		this.showCoupon = this.showCoupon.bind(this);
		this.selectCoupon = this.selectCoupon.bind(this);
		this.sure = this.sure.bind(this);
		this.cancel = this.cancel.bind(this);
		this.next = this.next.bind(this);
		this.toDetail = this.toDetail.bind(this);
	}

	// 跳转到下一页
	next() {
		const url = baseUrl + '/submitorder';
		const idArr = this.state.list.map((item) => {
			return item.id;
		})
		post(url, idArr, (res) => {
			alert('订单提交成功');
			const data = {
				orderNo: res.orderNo,
				orderMoney: this.state.orderMoney,
				discount: this.state.discount,
				needPay: this.state.needPay
			}
			this.props.getOrderResult(data);
			browserHistory.push('/ordersure');
		})

	}

	// 到详情
	toDetail(id) {
		browserHistory.push({
			pathname: '/detail',
			state: {
				id
			}
		})
	}

	// 确定
	sure() {
		const {
			couponList,
			selectNum,
			orderMoney
		} = this.state;
		if (selectNum === -1) {
			this.setState({
				...this.state,
				showCoupon: false,
			})

			return false;
		}
		const coupon = couponList[selectNum];
		// 是否过期
		const isExpired = new Date(coupon.date) - new Date() < 0;
		if (coupon.canUse > orderMoney) {
			alert(`金额不满¥{coupon.canUse},不能使用该优惠券`);
		} else if (isExpired) {
			alert('该优惠券已过期');
		} else {
			this.setState({
				...this.state,
				showCoupon: false,
				discount: coupon.amount,
				needPay: orderMoney - coupon.amount
			})
		}

	}

	// 取消
	cancel() {
		this.setState({
			...this.state,
			showCoupon: false
		})
	}

	// 选择优惠券
	selectCoupon(selectNum, discount) {
		this.setState({
			...this.state,
			selectNum,
		})
	}

	// 获取优惠券列表
	getCouponList(cb) {
		const url = baseUrl + '/getCouponList';
		get(url, {}, (res) => {
			cb(res);
		})
	}

	// 显示优惠券列表
	showCoupon() {
		this.getCouponList((res) => {
			this.setState({
				...this.state,
				showCoupon: true,
				couponList: res.list
			})
		})
	}

	// 切换收货方式
	changeWay(num) {
		this.setState({
			...this.state,
			way: num
		})
	}

	render() {
		const {
			list,
			totalMoney
		} = this.props;
		if (!totalMoney) {
			return (<div>hello</div>)
		}
		return (
			<div>
				<Header title="提交订单" />
				<View
					info={this.state}
					changeWay={this.changeWay}
					showCoupon={this.showCoupon}
					selectCoupon={this.selectCoupon}
					next={this.next}
					sure={this.sure}
					toDetail={this.toDetail}
					cancel={this.cancel}
				/>
			</div>
		)
	}
}

const stateToProps = state => {
	// 假数据
	// return { totalMoney: 612, list: [{ "shopName": "香薯粉蒸肉", "price": "35", "oldPrice": "30", "imgUrl": "http://127.0.0.1:9999/images/0.jpg", "prdNum": 3, "id": "000" }, { "shopName": "青椒回锅肉", "price": "35", "oldPrice": "30", "imgUrl": "http://127.0.0.1:9999/images/1.jpg", "prdNum": 5, "id": "001" }, { "shopName": "鱼香肉丝", "price": "30", "oldPrice": "", "imgUrl": "http://127.0.0.1:9999/images/2.jpg", "prdNum": 6, "id": "002" }, { "shopName": "栗香红烧肉", "price": "38", "oldPrice": "", "imgUrl": "http://127.0.0.1:9999/images/3.jpg", "prdNum": 4, "id": "003" }] }
	if (!(state.shoppingCar && state.shoppingCar.orderInfo)) {
		return {
			list: [],
			totalMoney: 0
		};
	} else {
		const { selectList, totalMoney } = state.shoppingCar.orderInfo;
		return {
			list: selectList,
			totalMoney
		}
	}
}

const dispatchToProps = {
	getOrderResult,
}

export default connect(stateToProps, dispatchToProps)(Container);