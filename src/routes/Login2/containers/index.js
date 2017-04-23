import { connect } from 'react-redux'
import {login} from '../modules'
import Comp from '../components'

const mapDispatchToProps = {
	login
}
const mapStateToProps = (state) => {
	return {
		msg: "我是login模块"
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Comp)