const ORDER_INFO = 'ORDER_INFO';
// action creator
export const sendOrderInfo =(data) => (dispatch) => {
    dispatch({
        type: ORDER_INFO,
        payload: data
    })
}
const initState = {
    moduleName: 'detail'
}
export default (state=initState) => {
    return state;
}

