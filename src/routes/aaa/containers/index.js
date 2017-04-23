import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules'
import Comp from '../components'
const mapDispatchToProps = {

}
const mapStateToProps = (state) => {
	return {
		msg: state.test
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Comp)