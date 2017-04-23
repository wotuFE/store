import React, { Component } from 'react'
import ReactPullToRefresh from 'react-pull-to-refresh'
// 替换原来的Ract自带的校验工具
import PropTypes from 'prop-types'
class Comp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
		        <div key={'item-' + count}>Item {count++}</div>
		      ]
		}
		this.addItem = this.addItem.bind(this);
		this.handleRefresh = this.handleRefresh.bind(this);
	}
	 handleRefresh(resolve, reject) {
	    setTimeout(()=> {
	      this.addItem() ? resolve() : reject();
	    }, 500);
	  }
	
	  addItem() {
	    this.state.items.push(<div key={'item-' + count}>Item {count++}</div>);
	    this.setState({
	      items: this.state.items
	    });
	    return true;
	  }
	  render() {
	  	let {items} = this.state;
		return(
			<ReactPullToRefresh
			  onRefresh={this.handleRefresh}
			  className="your-own-class-if-you-want"
			  style={{
			    textAlign: 'center'
			  }}>
			  <h3>Pull down to refresh</h3>
			  <div>{items}</div>
			  <div>etc.</div>
			</ReactPullToRefresh>
		)
	}
}

let count = 1;
Comp.defaultProps = {
	
}
Comp.propTypes = {
	msg: PropTypes.string.isRequired,
}

export default Comp