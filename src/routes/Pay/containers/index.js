import React, {Component} from 'react'
import Header from '../../../components/Header'
import View from '../components'
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'

class Container extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.state = {
            needPay: this.props.location.state.needPay
        }
    }

    next(ele) {
        if (ele.value != this.state.needPay) {
            alert('您输入的金额不对,请重新输入');
        } else {
            browserHistory.push('/result');
        }
    }

    render() {
        return (
            <div>
                <View 
                needPay={this.state&&this.state.needPay}
                next={this.next}

                />
            </div>
        )
    }
}

const stateToProps = state => {
    return {

    }
}

const dispatchToProps = {

}

export default connect(stateToProps, dispatchToProps)(Container);