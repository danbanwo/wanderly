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
						                    <li onClick={this.handleCountry} name="United States"><a href="#">United States</a></li>
						                 <div className="canadaSVG"></div>
						                    <li onClick={this.handleCountry} name="Canada"><a href="#">Canada</a></li>
						                <div className="chinaSVG"></div>
						                    <li onClick={this.handleCountry} name="China"><a href="#">China</a></li>
						                <div className="afghanSVG"></div>
						                	<li onClick={this.handleCountry} name="Afghanistan"><a href="#">Afghanistan</a></li>
						                <div className="barbadosSVG"></div>
						                    <li onClick={this.handleCountry} name="Barbados"><a href="#">Barbados</a></li>
						                <div className="mexicoSVG"></div>
						                    <li onClick={this.handleCountry} name="Mexico"><a href="#">Mexico</a></li>
						                <div className="brazilSVG"></div>
						                    <li onClick={this.handleCountry} name="Brazil"><a href="#">Brazil</a></li>
						                <div className="japanSVG"></div>
						                    <li onClick={this.handleCountry} name="Japan"><a href="#">Japan</a></li>
						                <div className="southAfricaSVG"></div>
						                    <li onClick={this.handleCountry} name="South Africa"><a href="#">South Africa</a></li>
						                <div className="koreaSVG"></div>
						                    <li onClick={this.handleCountry} name="Korea"><a href="#">Korea</a></li>
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