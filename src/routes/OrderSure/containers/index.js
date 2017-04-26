import React, { Component } from 'react'
import Header from '../../../components/Header'
import View from '../components'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

class Container extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
    }

    next() {
        browserHistory.push({
            pathname: '/pay',
            state: {
                needPay: this.props.orderResult.needPay
            }
        })
    }

    render() {
        return (
            <div>
                <Header title="确认订单"/>
                <View 
                info={this.props.orderResult}
                next={this.next}
                />
            </div>
        );
    }
}

const stateToProps = state => {
    return {
        orderResult: state.submitorder.orderResult
    }
}

const dispatchToProps = {

}

export default connect(stateToProps, dispatchToProps)(Container);