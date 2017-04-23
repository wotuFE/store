import { connect } from 'react-redux'
import {login} from '../modules'
import Comp from '../components'
import React, { Component } from 'react'
import Header from '../../../components/Header'
import Dialog from '../../../components/Dialog'
import {browserHistory} from 'react-router'
// 替换原来的Ract自带的校验工具
import PropTypes from 'prop-types'
import './index.scss'
import * as router from 'react-router'

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDialog: false,
			msg:'hahaha'
		}
		this.sure = this.sure.bind(this)
		this.cancel = this.cancel.bind(this)
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
			<Comp className="wrap" login={login} msg={msg} show={this.state.showDialog} sure = {this.sure} cancel = {this.cancel}/>
		);
	}
}

const mapDispatchToProps = {
	login
}
const mapStateToProps = (state) => {
	return {
		msg: "我是login模块"
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
