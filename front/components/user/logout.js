import React, {Component} from 'react'
import {browserHistory as history} from 'react-router';

class Logout extends Component {
	constructor(props){
		super(props)
	}

	handleSubmit = (e) => {
		this.props.actions()
	}

	render(){
		return(
			<div>
				<button onClick={this.handleSubmit}>Log out!</button>
			</div>
		)
	}
}

export default Logout;