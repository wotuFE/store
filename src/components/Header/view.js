import React from 'react';
import ReactDOM from 'react-dom';
import './Header.scss'
import { Link } from 'react-router'
import Dialog from '../Dialog'
class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { title } = this.props;
		return (
			<div>
				<div className="nav">
					<Link to="/"><i></i></Link>
					<span>{title}</span>
					<span onClick={this.props.edit} className="edit">{this.props.editText}</span>
				</div>
			</div>
		);
	}
}

export default Header