import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Header from '../../../components/Header'
import Dialog from '../../../components/Dialog'
import {browserHistory} from 'react-router'
// 替换原来的Ract自带的校验工具
import PropTypes from 'prop-types'
import './index.scss'
import * as router from 'react-router'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showDialog: false
		}
	}
	componentDidMount() {

	}
	sure() {
		this.setState({ showDialog: false });
		browserHistory.push('/');
	}
	cancel() {
		this.setState({ showDialog: false })
	}
	render() {
		const { login } = this.props;
		return(
			<div className="wrap">
				{
	    				this.state.showDialog?<Dialog msg={this.state.msg} sure={this.sure.bind(this)}
	    				cancel={this.cancel.bind(this)}/>:''
	    			}
	        		<Header title="登录"/>
	        		<div className="login">
	        			<p>手机号码: </p>
	        			<input ref="phone" type="text" placeholder="请输入手机号码"/>
	        			<p>密码: </p>
	        			<input ref="psw" type="password" placeholder="请输入密码"/>
	        			<p className="submit orange" onClick={login.bind(this,this)}>立即登录</p>
        			</div>
        		</div>
		);
	}
}

export default Register
