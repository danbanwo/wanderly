import React, {Component} from 'react'
import {browserHistory as history} from 'react-router';

class Logout extends Component {
	constructor(props){
		super(props)
	}

	handleSubmit = (e) => {
		// e.preventDefault()
		this.props.actions()
	}

	render(){
		console.log(this.props.actions())
		return(
			<div>
				<button onClick={this.handleSubmit}>Log out!</button>
			</div>
		)
	}
}

export default Logout;