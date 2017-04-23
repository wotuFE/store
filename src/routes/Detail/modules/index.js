// Constants 常量
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DOUBLE_ASYNC = 'COUNTER_DOUBLE_ASYNC'
// Actions
export function increment (value = 1) {
  return {
    type    : COUNTER_INCREMENT,
    payload : value
  }
}
// thunk:转换程序,异步action
export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch({
          type    : COUNTER_DOUBLE_ASYNC,
          payload : getState().register
        })
        resolve()
    }, 2000)
    })
  }
}

const initialState = {
    title: '详情'
}
export default function reducer (state = initialState, action) {
  switch (action.type) {
      case COUNTER_INCREMENT:
          return state + action.payload;
          break;
      case COUNTER_DOUBLE_ASYNC:
          return state * 2;
          break;
      default:
        return state;
  }
}
