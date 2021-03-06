// import Home from './containers/index'
//
// export default {
//   component: Home
// }

import { injectReducer } from '../../store/reducers'
export default (store) => ({
    path: ''
    , /*  Async getComponent is only invoked when route matches   */
    getComponent(nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
            and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
            /*  Webpack - use require callback to define
                dependencies for bundling   */
            const container = require( './containers/HomeContainer').default
            const reducer = require('./modules/HomeReducer').default
                /*  Add the reducer to the store on key 'register'  */
            injectReducer(store, { key: 'home' , reducer })
                /*  Return getComponent   */
            cb(null, container)
            /* Webpack named bundle   */
        }, '')
    }
})
