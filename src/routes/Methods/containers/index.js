import { connect } from 'react-redux'
import { increment, doubleAsync } from '../modules'
import Comp from '../components'
const mapDispatchToProps = {

}
const mapStateToProps = (state) => {
	return {
		msg: "相关方法"
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Comp)