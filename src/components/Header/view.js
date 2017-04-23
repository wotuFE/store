import React from 'react';
import ReactDOM from 'react-dom';
import './Header.scss'
import Dialog from '../Dialog'
class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		const { title } = this.props;
		return(
			<div>
		        <div className="nav">
		        		<i></i>
		            <span>{title}</span>
		        </div>
	    			
	    		</div>
		);
	}
}

export default Header