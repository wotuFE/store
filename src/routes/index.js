// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import CounterRoute from './Counter'
import Detail from './Detail'
import LoginRoute from './Login'
import TestRoute from './Test'
import RouteRoute from './Route'
import PageNotFound from './PageNotFound'
import Methods from './Methods'
import Redirect from './PageNotFound/redirect'
import { injectReducer } from '../store/reducers'
export const createRoutes = (store) => {
	return {
		path: '/',
		component: CoreLayout,
		indexRoute: Home(store),
		childRoutes: [
			CounterRoute(store),
			Detail(store),
			LoginRoute(store),
			TestRoute(store),
			RouteRoute(store),
			PageNotFound(),
			Methods(store),
			Redirect
		]
	}
}
export default createRoutes
