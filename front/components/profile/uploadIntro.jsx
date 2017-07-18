import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';

import '../../styles/uploadIntro.css';

class UploadIntro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name: '',
			country: ''
		}
	}

	handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

	handleCountry = (e) => {
		this.setState({'country': e.target.name})
	}

	onClick = () => {
		const { addItem } = this.props.props
		addItem(this.state)
		browserHistory.push('/uploadpic');
	}

	render() {
		return (
			<div>
				<div className="introContainer">
					<center>
						<h1 className="bioTitle"> Welcome, traveler!</h1>
						<p className="aboutYou"> Tell us a little more about yourself. </p>
						<input type="text" name='first_name' onChange={this.handleChange} className="firstName" placeholder="First Name"></input>
						<input type="text" name='last_name' onChange={this.handleChange} className="lastName" placeholder="Last Name"></input>
						<div><button type="button" className="btn btn-default continue" onClick={this.onClick}>Continue</button></div>
						<Link to="/uploadpic" id="skippie">Skip this step</Link>
					</center>
				</div>
			</div>
		)
	}
};

export default UploadIntro;
