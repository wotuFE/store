import React, {Component} from 'react'
import {connect} from 'react-redux'
import View from '../components'
import Header from '../../../components/Header'

class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            		<Header title="支付结果"/>
                <View 
                list={this.props.list}
                orderNo={this.props.orderNo}
                />
            </div>
        )
    }
}

const stateToProps = state => {
    return {
        list: state.shoppingCar.orderInfo.selectList,
        orderNo: state.submitorder.orderResult.orderNo
    }
}

const dispatchToProps = {

}
export default connect(stateToProps, dispatchToProps)(Container);