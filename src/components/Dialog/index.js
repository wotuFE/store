import React, { Component } from 'react'
import './index.scss'

class Dialog extends Component {
	constructor(props) {
		super(props);
		this.sure = this.sure.bind(this);
		this.cancel = this.cancel.bind(this);
	}
	sure() {
		this.setState({
			show: false
		})
		this.props.sure();
	}
	cancel() {
		this.setState({
			show: true
		})
		this.props.cancel();
	}
	render() {
		const {msg} = this.props;
		return(
			<div>
				<div className="dialog">
					<h5> 温馨提示 </h5>
					<div className="content">
						{ msg || '你想说什么?'}
					</div>
					<div className="confirm">
						<span onClick={this.cancel}>取消</span>
						<span onClick={this.sure}>确认</span>
					</div>
				</div>
				<div className="layout"></div>
			</div>
		)
	}
}
export default Dialog;