const ORDER_RESULT = 'ORDER_RESULT';
// action creator
export const getOrderResult = (data) => (dispatch) => {
    dispatch({
        type: ORDER_RESULT,
        payload: data
    })
}

const initState = {
    moduleName: 'submit order'
}
export default (state=initState, action) => {
    if (action.type === ORDER_RESULT) {
        return {
            orderResult: action.payload
        }
    } else {
        return state;
    }
}