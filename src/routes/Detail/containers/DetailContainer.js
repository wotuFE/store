import React, { Component } from 'react'
import DetailView from '../components/DetailView'
import { connect } from 'react-redux'
import { baseUrl } from '../../../common/config'
import { get, post } from '../../../common/client'
import Header from '../../../components/Header'
import { sendOrderInfo } from '../modules/DetailReducer'
import { browserHistory } from 'react-router'
class DetailContainer extends Component {
    constructor(props) {
        super(props);
        const { id } = props.location.state;
        this.state = {
            detail: null,
            num: 1,
            id,
            shopNum: 0
        }
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.addToCar = this.addToCar.bind(this);
        this.buyNow = this.buyNow.bind(this);
    }

    // 获取产品详情
    componentDidMount() {
        const url = baseUrl + '/getDetail'
        const params = { id: this.state.id };
        get(url, params, (res) => {
            this.setState({
                detail: res.detail,
                shopNum: res.shopNum
            })
        })
    }

    // 立即购买
    buyNow() {
        const { id, num, detail} = this.state;
        this.addToCar(id, num, () => {
            const totalMoney = detail.price * num;
            detail.prdNum = num;
            const orderInfo = {
                totalMoney,
                selectList: [detail]
            }
            this.props.sendOrderInfo(orderInfo);
            browserHistory.push('/submitorder');
        })
    }

    // 点击加号
    add() {
        this.setState({
            ...this.state,
            num: ++this.state.num
        })
    }

    // 点击减号
    minus() {
        if (this.state.num < 2) return false;
        this.setState({
            ...this.state,
            num: --this.state.num
        })
    }

    // 添加到购物车
    addToCar(id, num, cb) {
        const url = baseUrl + '/addToCar';
        const params = {
            id,
            num
        }
        post(url, params, (res) => {
            alert('成功添加到购物车');
            this.setState({
                ...this.state,
                shopNum: res.shopNum
            })
            cb && cb();
        });
    }

    render() {
        return (
            <div>
                <Header title="商品详情" />
                <DetailView
                    detail={this.state.detail}
                    addToCar={this.addToCar}
                    add={this.add}
                    buyNow={this.buyNow}
                    minus={this.minus}
                    num={this.state.num}
                    shopNum={this.state.shopNum}
                />
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {

    }
}
const dispatchToProp = {
    sendOrderInfo,
}
export default connect(stateToProps, dispatchToProp)(DetailContainer);