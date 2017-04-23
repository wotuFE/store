import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../../components/Header'
import './index.scss'

class Register extends React.Component {
	constructor(props) {
		debugger;
		super(props);
	}
	render() {
		return(
			<div className="wrap">
        		详情(产品id为: {this.props.id})
        	</div>
		);
	}
}

export default Register
