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
							{/* <div className="container">
    							<div className="row">
        							<div className="col-lg-10">
           						 	<div className="btn-group">
                						<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">Home Country
                					 		<span className="caret"></span>
                						</button>
						                <ul className="dropdown-menu scrollable-menu">
						                    <li onClick={this.handleCountry} name="USA"><a href="#">USA</a></li>
						                    <li onClick={this.handleCountry} name="CA"><a href="#">CA</a></li>
						                    <li onClick={this.handleCountry} name="UK"><a href="#">UK</a></li>
						                    <li onClick={this.handleCountry} name="CN"><a href="#">CN</a></li>
						                    <li onClick={this.handleCountry} name="AF"><a href="#">AF</a></li>
						                    <li onClick={this.handleCountry} name="FR"><a href="#">FR</a></li>
						                    <li onClick={this.handleCountry} name="BR"><a href="#">BR</a></li>
						                    <li onClick={this.handleCountry} name="DO"><a href="#">DO</a></li>
						                    <li onClick={this.handleCountry} name="EG"><a href="#">EG</a></li>
						                    <li onClick={this.handleCountry} name="GR"><a href="#">GR</a></li>
						                </ul>
           				 			</div>
           				 			</div>
           				 		</div>
           					</div> */}
						<div><button type="button" className="btn btn-default continue" onClick={this.onClick}>Continue</button></div>
						<Link to="/uploadpic" id="skippie">Skip this step</Link>
					</center>
				</div>
			</div>
		)
	}
};

export default UploadIntro;
