import { connect } from 'react-redux'
import { toDetail } from '../modules'
import view from '../components'

const mapDispatchToProps = {
	 toDetail,
}
const mapStateToProps = (state) => {
	return {
		isLogin: state.login && state.login.isLogin
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(view);
