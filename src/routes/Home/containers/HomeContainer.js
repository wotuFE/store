import React, { Component } from 'react'
import { connect } from 'react-redux'
import HomeView from '../components/HomeView'
import Header from '../../../components/Header'
import { get, post } from '../../../common/client'
import { baseUrl } from '../../../common/config'
import { browserHistory } from 'react-router'
import { makeDetailInfo } from '../modules/HomeReducer'

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        console.log('是否已登录',props.isLogin?'是':'否');
        this.state = {
            recommandPrd: null,
            list: [],
            currPage: 1,
            shopNum: 0,
            showMore: false
        }
        this.getPrdList = this.getPrdList.bind(this);
        this.addToCar = this.addToCar.bind(this);
        this.toDetail = this.toDetail.bind(this);
    }
    componentDidMount() {
        const url = baseUrl + '/getPrdList';
        const param = { currPage: 1 };
        get(url, param, (res) => {
            this.setState({
                recommandPrd: res.recommandPrd,
                list: res.list || [],
                shopNum: res.shopNum,
                showMore: res.currPage < res.totalPage,
                currPage: this.state.currPage + 1
            })
        })
    }
    render() {
        return (
            <div>
                <Header title="沃土外卖部" />
                <HomeView
                recommandPrd={this.state.recommandPrd}
                list={this.state.list}
                shopNum={this.state.shopNum}
                showMore={this.state.showMore}
                getPrdList={this.getPrdList}
                addToCar={this.addToCar}
                makeDetailInfo={makeDetailInfo}
                toDetail={this.toDetail}
            />
            </div>
        )
    }

    // 跳转到详情
    toDetail(id) {
        // browserHistory.push('/detail/'+id);
        browserHistory.push({ pathname: 'detail', state: { id,shopNum: this.state.shopNum} });
    }

    // 添加到购物车
    addToCar(id) {
        const url = baseUrl + '/addToCar';
        const param = { id };
        post(url, param, (res) => {
            alert('成功添加到购物车');
            this.setState({
                ...this.state,
                shopNum: res.shopNum
            })
        })
    }
    getPrdList() {
        const url = baseUrl + '/getPrdList';
        const param = { currPage: this.state.currPage };
        get(url, param, (res) => {
            this.setState({
                ...this.state,
                list: [...this.state.list, ...res.list],
                shopNum: res.shopNum,
                showMore: res.currPage < res.totalPage,
                currPage: this.state.currPage + 1
            })
        })
    }
}

const stateToProps = (state) => {
    return {
        isLogin: state.login && state.login.isLogin
    }
}
const dispatchToProps = {
     
}

export default connect(stateToProps, dispatchToProps)(HomeContainer);

