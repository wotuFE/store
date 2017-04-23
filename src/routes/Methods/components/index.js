import React, { Component } from 'react'
import './index.scss'
import * as router from 'react-router'
// 常用方法列表
const commonArr = [
	'componentDidMount',
	'shouldComponentUpdate',
	'componentDidUpdate',
	
];
const objArr = [
	["常用方法", commonArr],
	["Router", Object.getOwnPropertyNames(router)],
	["React", Object.getOwnPropertyNames(React)],
	["Component", Object.getOwnPropertyNames(Component)]
];
const map = new Map(objArr);

class Comp extends Component {
	constructor(props) {
		super(props);
	}
	compare(a,b) {
		a = a.toLowerCase();
		b = b.toLowerCase();
		return a>b?1:-1;
	}
	sort(values) {
		values = values.map((item) => {
			return item.sort(this.compare);
		});
		return values;
	}
	render() {
		let keys = [...map.keys()];
		let values = [...map.values()];
		values = this.sort(values);
		return(
			<div>
				<h2>方法列表</h2>
				{
					values.map(function(item,i) {
						return (
							<details key={i}>
								<summary>{keys[i]}</summary>
								<legend>
									{
										item.map(function(subItem,j) {
											return (
												<li key={j}>
													<span className="char">{subItem[0].toUpperCase()} -</span>{subItem}
												</li>
											)
										})
									}
								
								</legend>
							</details>
						)
					})
				}
            </div>
		)
	}
}
export default Comp