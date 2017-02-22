import React, { Component } from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';
import { Link } from 'react-router';

import '../../styles/uploadIntro.css';

class UploadIntro extends Component {

	onClick = () => {
		browserHistory.push('/createprofile');
	}

	render() {
		return (
			<div>
				<div className="introContainer">
					<center>
						<h1 className="bioTitle"> Welcome, traveler!</h1>
						<p className="aboutYou"> Tell us a little more about yourself. </p>
						<input type="text" className="name"placeholder="Name"></input>
						


						<div className="dropdown">
							<button className="btn btn-default dropdown-toggle"
								type="button"
								data-toggle="dropdwn">Home Country
								<span className="caret"></span>
							</button>
			
								<div className="dropdown-content">
									<a href="#">USA</a>
									<a href="#">CA</a>
									<a href="#">UK</a>
									<a href="#">CN</a>
									<a href="#">AF</a>
									<a href="#">FR</a>
								</div>
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
