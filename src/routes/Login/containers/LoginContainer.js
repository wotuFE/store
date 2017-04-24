import React,{Component} from 'react'
import {connect} from 'react-redux'
import LoginView from '../components/LoginView'
import { login } from '../modules/LoginReducer'
import { baseUrl } from '../../../common/config'
import { browserHistory } from 'react-router'

class LoginContainer extends Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }
    render(){
        return (
            <LoginView login={this.login}/>
        )
    }
    login({ phone, psw}) {
        phone = phone.value;
        psw = psw.value;
        if (!phone) {
            alert('电话号码不能为空');
            return false;
        }
        if (!psw) {
            alert('密码不能为空');
            return false;
        }
        const url = baseUrl + '/login'
        this.props.login(url, {phone,psw});
        browserHistory.push('/');
    }
}


const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = {
    login
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);