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
			totalMoney,
			list,
			select,
			classArr
		} = this.props;
		return(
			<div className={"shopping "+this.props.editClass}>
				<ul className="list">
					{
						list && list.map((item,i) => {
							return <li key={item.id}>
								<div onClick={()=>{select(i)}} className="one"><span ref={'prd'+i} 
									className={classArr[i]}></span>
								</div>
								<div className="two">
									<img onClick={()=>{this.props.toDetail(item.id)}} src={item.imgUrl} />
									<div className="info">
										<p>{item.shopName}</p>
										<p>¥ {item.price}</p>
									</div>

								</div>
								<div className="three">
							<p className="prdNum">x {item.prdNum}</p>
							<p className="operate dn">
								<span onClick={()=>{this.props.minus(i)}}  className="minus">-</span>
								<span className="num">{item.prdNum}</span>
								<span onClick={()=>{this.props.add(i)}} className="add">+</span>
							</p>
						</div>
							</li>
						})
					}
				</ul>
				<div className="shopping-footer">
					<p onClick={()=>{this.props.selectAll(this.refs.selectAll)}} 
					className="all"><i ref="selectAll" 
					className={this.props.selectAllClass}></i><span>全选</span></p>
					<div className="other">
						<div className="total">
							<p>¥ {totalMoney}</p>
							<p>合计</p>
						</div>
						<div onClick={this.props.next} className="cal"></div>
						<div onClick={this.props.delete} 
						className="delete">删除</div>
					</div>
				</div>
			</div>
		)
	}
}

export default View;