import React, { Component } from 'react' 
import './index.scss'

class View extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const {
			totalMoney,
			list,
			select,
			classNameArr
		} = this.props;
		return(
			<div className="shopping edit">
				<ul className="list">
					<li className="edit">
						<div className="one">
							<span className="icon select"></span>
						</div>
						<div className="two">
							<img src={require('../../../images/goods1.png')} />
						</div>
						<div className="info">
							<p>青椒回锅肉</p>
							<p>¥ 35 </p>
						</div>
						<div className="three">
							<p className="prdNum">x 11</p>
							<p className="operate dn">
								<span className="minus">-</span>
								<span className="num">5</span>
								<span className="add">+</span>
							</p>
						</div>
					</li>
					<li>
						<div className="one">
							<span className="icon select"></span>
						</div>
						<div className="two">
							<img src={require('../../../images/goods1.png')} />
						</div>
						<div className="info">
							<p>青椒回锅肉</p>
							<p>¥ 35 </p>
						</div>
						<div className="three">
							x 11
						</div>
					</li>
				</ul>
				<div className="shopping-footer">
					<p onClick={()=>{this.props.selectAll(this.refs.selectAll)}}  className="all">
					<i ref="selectAll" className={this.props.selectAllclassName}></i><span>全选</span></p>
					<div className="other">
						<div className="total">
							<p>¥ {totalMoney}</p>
							<p>合计</p>
						</div>
						<div className="cal"></div>
					</div>
				</div>
			</div>
		)
	}
}

export default View;