import axios from 'axios'
import {browserHistory} from 'react-router'

// 获取产品列表
export const getPrdList = (view, currPage) => {
	axios.get('http://127.0.0.1:9999/store/getPrdList?currPage=' + currPage).then((res) => {
		const data = res.data;
		let { prdList, recommandPrd } = view.state;
		const showMore = currPage == data.totalPage ? 'dn' : '';
		// 不管是首次加载还是后面加载都需要的数据
		const common ={
			showMore,
			currPage: currPage + 1,
		}
		// 首次加载
		if (currPage == 1) {
			view.setState({
				...common,
				currPage: currPage + 1,
				recommandPrd: data.recommandPrd,
				prdList: data.list,
				shopNum: data.shopNum
			});
		} else {
			view.setState({
				...common,
				...view.state,
				prdList: [...view.state.prdList,...data.list],
			});
		}
	}).catch((e) => {
		console.log(e);
		alert('查询列表失败');
	})
}

// 加入购物车
export const addToCar = (view,id) => {
	if (!view.props.isLogin) {
		alert('请先登录');
		browserHistory.push('/login');
		return false;
	}
	axios.get('http://127.0.0.1:9999/store/addToCar', { id, }).then((res) => {
		const data = res.data;
		view.setState({
			...view.state,
			shopNum: data.shopNum
		})
	}).catch((e) => {
		console.log(e);
		alert('加入到购物车失败');
	})
}

// 跳转到详情
export const toDetail = (id)=>(dispatch,state) => {
	dispatch({
		type: 'TODETAIL',
		id
	})
	browserHistory.push('/detail');
}

// 状态管理
const initState = {
	msg: 'this is home module'
}
const reducer = (state = initState, action) => {
	const { type, data } = action;
	switch (type) {
		case 'TODETAIL':
		return {
			...state,
			id: action.id
		}
	}
	return state;
}
export default reducer;
