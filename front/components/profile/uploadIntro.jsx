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
		console.log(this.state)
		return (
			<div>
				<div className="introContainer">
					<center>
						<h1 className="bioTitle"> Welcome, traveler!</h1>
						<p className="aboutYou"> Tell us a little more about yourself. </p>
						<input type="text" name='first_name' onChange={this.handleChange} className="firstName" placeholder="First Name"></input>
						<input type="text" name='last_name' onChange={this.handleChange} className="lastName" placeholder="Last Name"></input>
           						 	<div className="dropdown">
                						<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">Home Country
                					 		<span className="caret"></span>
                						</button>
						                <div className="dropdown-content">
						                <div className="usaSVG"></div>
						                    <li onClick={this.handleCountry} name="USA"><a href="#">USA</a></li>
						                 <div className="canadaSVG"></div>
						                    <li onClick={this.handleCountry} name="CA"><a href="#">CA</a></li>
						                <div className="barbadosSVG"></div>
						                    <li onClick={this.handleCountry} name="UK"><a href="#">BB</a></li>
						                <div className="chinaSVG"></div>
						                    <li onClick={this.handleCountry} name="CN"><a href="#">CN</a></li>
						                <div className="afghanSVG"></div>
						                    <li onClick={this.handleCountry} name="AF"><a href="#">AF</a></li>
						                <div className="mexicoSVG"></div>
						                    <li onClick={this.handleCountry} name="FR"><a href="#">MEX</a></li>
						                <div className="brazilSVG"></div>
						                    <li onClick={this.handleCountry} name="BR"><a href="#">BR</a></li>
						                <div className="japanSVG"></div>
						                    <li onClick={this.handleCountry} name="DO"><a href="#">JPN</a></li>
						                <div className="southAfricaSVG"></div>
						                    <li onClick={this.handleCountry} name="EG"><a href="#">ZAF</a></li>
						                <div className="koreaSVG"></div>
						                    <li onClick={this.handleCountry} name="GR"><a href="#">KOR</a></li>
						                </div>
           				 			</div>
						<button type="button" className="btn btn-default continue" onClick={this.onClick}>Continue</button>
						<Link to="/uploadpic" id="skippie">Skip this step</Link>
					</center>
				</div>
			</div>
		)
	}
};

export default UploadIntro;