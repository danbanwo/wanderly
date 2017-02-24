import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';

import '../../styles/uploadIntro.css';

class UploadIntro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
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
		browserHistory.push('/uploadpic');
	}

	render() {
		return (
			<div>
				<div className="introContainer">
					<center>
						<h1 className="bioTitle"> Welcome, traveler!</h1>
						<p className="aboutYou"> Tell us a little more about yourself. </p>
						<input type="text" name='name' onChange={this.handleChange} className="name" placeholder="Name"></input>
						<div className="dropdown">
							<button className="btn btn-default dropdown-toggle"
								type="button"
								data-toggle="dropdwn">Home Country
								<span className="caret"></span>
							</button>
							<ul className="dropdown-menu">
								<li onClick={this.handleCountry} name='USA' ><a href="#">USA</a></li>
								<li onClick={this.handleCountry} name='CA' ><a href="#">CA</a></li>
								<li onClick={this.handleCountry} name='UK' ><a href="#">UK</a></li>
								<li onClick={this.handleCountry} name='CN' ><a href="#">CN</a></li>
								<li onClick={this.handleCountry} name='AF' ><a href="#">AF</a></li>
								<li onClick={this.handleCountry} name='FR' ><a href="#">FR</a></li>
							</ul>
						</div>
						<button type="button" className="btn btn-default continue" onClick={this.onClick}>Continue</button>
						<Link to="createprofile" id="skippie">Skip this step</Link>
					</center>
				</div>
			</div>
		)
	}
};

export default UploadIntro;