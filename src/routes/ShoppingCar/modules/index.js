// constant
const ORDER_INFO = 'ORDER_INFO'
// action creator
export const selectPrd = (data) => (dispatch, state) => {
    dispatch({
        type: ORDER_INFO,
        payload: data
    })
}

const initState = {
    moduleName: 'shoppingCar'
}
export default (state = initState, action) => {
    if (action.type === ORDER_INFO) {
        return {
            ...state,
            orderInfo: action.payload
        }
    } else {
        return state;
    }

}