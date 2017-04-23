import React, {Component} from 'react'
import './HomeView.scss'
import {addToCar,getPrdList} from '../modules'
import Header from '../../../components/Header'

class HomeView extends Component {
	constructor(props) {
		super(props);
		console.log('isLogin',props.isLogin);
		this.state = {
			currPage: 1,
			recommandPrd: null,
			prdList:[],
			showMore: '',
			shopNum: 0
		}
	}
	componentDidMount() {
		const {currPage} = this.state;
		getPrdList(this,currPage);
	}
	render() {
		const {prdList,recommandPrd} = this.state;
		if (!prdList.length) {
			return <div style={{margin: "100px"}}>客官,请稍等..........</div>
		}
		return(
			<div className="wrap">
				<Header title="沃土外卖部"/>
				<div className="home">
				<div className="banner">
					<img src={recommandPrd.imgUrl}/>
				</div>
				<ul className="nav-list">
					<li><i className="i1"></i><span>全部商品</span></li>
					<li><i className="i2"></i><span>快速下单</span></li>
					<li><i className="i3"></i><span>优惠券</span></li>
					<li><i className="i4"></i><span>我的订单</span></li>
				</ul>
				<ul className="coupon">
					<li>
						<p>$<span>20</span></p>
						<p className="quan"><span>优惠券</span></p>
						<span className="circle c1"></span>
						<span className="circle c2"></span>
						<span className="line"></span>
						<span className="get">立即领取</span>
					</li>
					<li>
						<p>$<span>30</span></p>
						<p className="quan"><span>优惠券</span></p>
						<span className="circle c1"></span>
						<span className="circle c2"></span>
						<span className="line"></span>
						<span className="get">立即领取</span>
					</li>
				</ul>
				<div className="main">
					<h3 className="title">爆款特卖</h3>
					<ul className="prdList">
					{
						prdList.map((item,i)=>{
							return (
								<li key={item.id}>
									<p><img onClick={this.props.toDetail.bind(this,item.id)} src={item.imgUrl}/></p>
									<p>
										<span>{item.shopName} </span>
										<span>$ {item.price} id: {item.id}</span>
									</p>
									<i onClick={addToCar.bind(this,this,item.id)}></i>
								</li>
							)
						})
					}
					</ul>
				</div>
				<div className={'more '+this.state.showMore} onClick={getPrdList.bind(this,this,this.state.currPage)}>点击加载更多</div>
				{ this.state.shopNum ?
					<a className="icon-car">
					<i>{this.state.shopNum}</i>
					</a> : ''
				}
			  </div>
			</div>
		)
	}
}

export default HomeView
