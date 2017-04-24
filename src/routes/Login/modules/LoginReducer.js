// constant
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';
import { post } from '../../../common/client'
// action creator
const loginRequest = ()=>({type: LOGIN_REQUEST}) 
const loginSuccess = ()=>({type: LOGIN_SUCCESS}) 
const loginError = ()=>({type: LOGIN_ERROR}) 

export const login = (url,params)=>(dispatch,state)=>{
    // 开始发送请求
    dispatch(loginRequest());
    post(url,params,(res)=>{
        dispatch(loginSuccess())
    })
}

const initState = {
    isLogin: false,
    // 是否正在请求
    fetching: false
}
export default (state=initState,action) => {
    const { type,payload } = action;
    switch(type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                fetching: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                fetching: false,
                isLogin: true
            }
        case LOGIN_ERROR:
            return {
                ...state,
                fetching: false
            }
    }
    return state;
}


