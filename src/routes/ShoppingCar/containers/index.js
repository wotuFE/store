import React, { Component } from 'react'
import Header from '../../../components/Header'
import View from '../components/index'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { get } from '../../../common/client'
import { baseUrl } from '../../../common/config'
import { post } from '../../../common/client'
import { selectPrd } from '../modules'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: null,
            totalMoney: 0,
            editText: '编辑',
            // 控制单选
            classArr: [],
            editText: '编辑',
            editClass: '',
            // 控制全选
            selectAllClass: 'icon select'
        }
        this.select = this.select.bind(this);
        this.selectAll = this.selectAll.bind(this);
        this.edit = this.edit.bind(this);
        this.delete = this.delete.bind(this);
        this.add = this.add.bind(this);
        this.next = this.next.bind(this);
        this.minus = this.minus.bind(this);
        this.toDetail = this.toDetail.bind(this);
    }
    componentDidMount() {
        const url = `${baseUrl}/getShoppingCarList`;
        get(url, null, (res) => {
            const {
				list
			} = res;
            const classArr = [];
            list.forEach((item) => {
                classArr.push('icon select');
            })
            const totalMoney = this.getTotal(list, classArr);
            this.setState({
                ...this.state,
                list: res.list,
                classArr,
                totalMoney,
            })
        })
    }

    // 跳转到下个页面
    next() {
        const { totalMoney,list,classArr } = this.state;
        if (!totalMoney) {
            alert('您还没选择商品~');
            return false;
        }
        const selectList = list.filter((item,i)=>{
            return classArr[i].match('select');
        })
        const orderInfo = {
            totalMoney,
            selectList
        }
        this.props.selectPrd(orderInfo);
        browserHistory.push('/submitorder');
    }

    // 跳转到详情
    toDetail(id) {
        browserHistory.push({
            pathname: '/detail',
            state: {
                id
            }
        })
    }

    // 增加
    add(i) {
        const { list } = this.state;
        list[i].prdNum = ++list[i].prdNum;
        this.setState({
            ...this.state,
            list,
        })
    }

    minus(i) {
        const { list } = this.state;
        const prdNum = --list[i].prdNum;
        list[i].prdNum = prdNum < 2 ? 1 : prdNum;
        this.setState({
            ...this.state,
            list,
        })
    }

    // 删除
    delete(id) {
        const idArr = [];
        const list = [];
        const classArr = [];
        this.state.classArr.map((item, i) => {
            if (item.match('select')) {
                idArr.push(this.state.list[i].id);
            } else {
                list.push(this.state.list[i]);
                classArr.push(item);
            };
        })
        const url = baseUrl + '/delete'
        this.getTotal(list, classArr);
        post(url, { idArr }, (res) => {
            alert('删除成功');
            this.setState({
                ...this.state,
                list,
                classArr
            })
        })
    }

    // 编辑
    edit() {
        let {
			classArr,
            selectAllClass,
            editClass,
            editText,
            list
		} = this.state;
        // 编辑状态
        if (editClass) {
            editClass = '';
            editText = '编辑';
            //取消全选
            selectAllClass = 'icon select';
            // 取消选择
            classArr = classArr.map((item) => {
                return 'icon select';
            })
            // 修改完成提交请求
            const url = baseUrl + '/edit'
            const params = list.map((item) => {
                return {
                    id: item.id,
                    prdNum: item.prdNum
                }
            })
            post(url, params, (res) => {
                alert('编辑成功');
            })
        } else {
            editClass = 'edit';
            editText = '完成';
            //取消全选
            selectAllClass = 'icon';
            // 取消选择
            classArr = classArr.map((item) => {
                return 'icon';
            })
        }
        const totalMoney = this.getTotal(this.state.list, classArr) || 0;
        this.setState({
            ...this.state,
            editClass,
            selectAllClass,
            classArr,
            totalMoney,
            editText
        })
    }

    // 选择
    select(i) {
        const classArr = this.state.classArr;
        classArr[i] = classArr[i].match('select') ? 'icon' : 'icon select';
        const selectLen = classArr.filter((item) => {
            return item.match('select')
        }).length;
        this.state.selectAllClass = selectLen === classArr.length ? 'icon select' : 'icon';
        const totalMoney = this.getTotal(this.state.list, classArr);
        this.setState({
            ...this.state,
            classArr,
            totalMoney,
            selectAllClass: this.state.selectAllClass
        })
    }

    // 合计
    getTotal(list, classArr) {
        let totalMone = 0;
        classArr.forEach((item, i) => {
            if (item.match('select')) {
                let {
					price,
                    prdNum
				} = list[i];
                totalMone += price * prdNum;
            }
        })
        return totalMone;
    }

    // 全选
    selectAll(ele) {
        let classArr = this.state.classArr;
        let className = this.state.selectAllClass;
        if (className.match('select')) {
            className = 'icon';
            classArr = classArr.map((item) => {
                return 'icon';
            })
        } else {
            className = 'icon select';
            classArr = classArr.map((item) => {
                return 'icon select';
            })
        }
        const totalMoney = this.getTotal(this.state.list, classArr);
        this.setState({
            ...this.state,
            classArr,
            totalMoney,
            selectAllClass: className
        })
    }

    render() {
        return (
            <div>
                <Header
                    edit={this.edit}
                    title="购物车"
                    editText={this.state.editText}
                />
                <View
                    list={this.state.list}
                    select={this.select}
                    selectAllClass={this.state.selectAllClass}
                    selectAll={this.selectAll}
                    editClass={this.state.editClass}
                    editText={this.state.editText}
                    classArr={this.state.classArr}
                    add={this.add}
                    toDetail={this.toDetail}
                    next={this.next}
                    minus={this.minus}
                    delete={this.delete}
                    totalMoney={this.state.totalMoney.toFixed(2)}
                />
            </div>
        )
    }
}

const stateToProps = (state) => {
    return {

    }
}
const dispatchToProps = {
    selectPrd,
}
export default connect(stateToProps, dispatchToProps)(Container);