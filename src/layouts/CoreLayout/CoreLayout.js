import React from 'react'
import PropTypes from 'prop-types'
//import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { IndexLink, Link } from 'react-router'
import './CoreLayout.scss'
import './flexible'
class CoreLayout extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='container text-center'>
            <Footer />
            <div className='core-layout__viewport'>
                {this.props.children}
            </div>
           </div>
		)
	}
}

CoreLayout.propTypes = {
	children: PropTypes.element.isRequired
}

export default CoreLayout
