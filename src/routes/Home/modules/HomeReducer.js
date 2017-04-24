// constant

// action creator
const makeDetailInfo = (param) => (dispatch,state)=> {
    return {
        type: 'DETAIL_INFO',
        payload: {shopNum: 3, id: 4}
    }
}

const initState = {
    moduleName: 'home'
}
export default (state=initState,action) => {
    const { type,payload } = action;
    switch(type){
        case 'test':
        return {
            ...state,
            test: payload
        }
    }
    return state;
}