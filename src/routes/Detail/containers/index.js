import {
    connect
}
from 'react-redux'
import {
    increment, doubleAsync
}
from '../modules'
import Comp from '../components'
const mapDispatchToProps = {
    increment: () => increment(1)
    , doubleAsync
}
const mapStateToProps = (state) => {
    return {
        id: state.home && state.home.id
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comp)
