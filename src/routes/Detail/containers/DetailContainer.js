import React, { Component } from 'react'
import DetailView from '../components/DetailView'
import { connect } from 'react-redux'
import { baseUrl } from '../../../common/config'
import { get,post } from '../../../common/client'
import Header from '../../../components/Header'

class DetailContainer extends Component {
    constructor(props) {
        super(props);
        const { id,shopNum } = props.location.state;
        this.state = {
            detail: null,
            num: 1,
            id,
            shopNum
        }
        this.add = this.add.bind(this);
        this.minus = this.minus.bind(this);
        this.addToCar = this.addToCar.bind(this);
    }
    
    // 获取产品详情
    componentDidMount() {
        const url = baseUrl + '/getDetail'
        const params = {id: this.state.id};
        get(url, params, (res) => {
            this.setState({
                detail: res.detail
            })
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
    addToCar(id,num) {
        const url = baseUrl + '/addToCar';
        const params = {
            id,
            num
        }
        post(url, params, (res)=> {
            this.setState({
                ...this.state,
                shopNum: res.shopNum
            })
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
               minus={this.minus}
               num={this.state.num}
               shopNum={this.state.shopNum}
               />
           </div>
       )
    }
}

const stateToProps = (state) => {
    console.log(state.home);
    return {

    }
}
const dispatchToProp = {

}
export default connect(stateToProps,dispatchToProp)(DetailContainer);