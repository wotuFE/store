import React, { Component } from 'react';
import Header from '../../../components/Header'
import Dialog from '../../../components/Dialog'
import './LoginView.scss'

class view extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {login} = this.props;
        return (
            <div className="wrap">
                <Header title="登录" />
                <div className="login">
                    <p>手机号码: </p>
                    <input ref="phone" type="text" placeholder="请输入手机号码" value="13888888888"/>
                    <p>密码: </p>
                    <input ref="psw" type="password" placeholder="请输入密码" value="fsdfsdfsdf"/>
                    <p className="submit orange" onClick={()=>{login(this.refs)}}>立即登录</p>
                </div>
            </div>
        )
    }
}
export default view;