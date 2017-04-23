import axios from 'axios'
import { browserHistory } from 'react-router'

export const login = (param) => (dispatch, state) => {
	let {phone,psw} = param.refs;
	phone = phone.value;
	psw = psw.value;
	dispatch({
		type: 'LOGIN'
	});
	axios.post('http://localhost:9999/store/login',{phone,psw}).then(function(res) {
		param.setState({
			showDialog: true,
			msg: '登录成功'
		});
		dispatch({
			type: 'LOGIN_SUCCESS'
		});
	}).catch(() => {param.setState({
			showDialog: true,
			msg: '登录失败'
		});
		dispatch({
			type: 'LOGIN_ERROR'
		});
	})
}

const initialState = {
	isLogin: false
};
export default function reducer(state = initialState, action) {
	const {type} = action;
	switch(type) {
		case 'LOGIN_SUCCESS':
			return {
				isLogin: true
			};
		default:
			return state;
	}
}
