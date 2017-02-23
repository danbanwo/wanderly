import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import '../../styles/uploadBio.css';

class UploadBio extends Component {
	render() {
	return (
		<div>
			<div className="bioContainer">
			<center>
			<div className="welcome">
				<h1 className="bioTitle"> Welcome, traveler!</h1>
				<p id="aboutMe"> Tell us a little more about yourself. </p>
			</div>

			<div className="bioQuestions">
				<p id="questions"> What types of travel do you like? </p>

				<div className="bioButtons">
					<button type="button" className="btn btn-default one">Food</button>
					<button type="button" className="btn btn-default two">Culture & Art</button>
					<button type="button" className="btn btn-default three">Relaxation</button>
					<button type="button" className="btn btn-default four">Backpacking</button>
					<button type="button" className="btn btn-default five">Activities</button>
					<button type="button" className="btn btn-default six">Independence</button>
				</div>
			</div>

			<div className="bioIntro">
				<p className="questions"> Introduce yourself </p>
				<input type="text" placeholder="Write a brief intro..." className="intro"></input>
			</div>

			<button className="btn btn-default done" type="button">All done!</button>
				<Link to='/' id="skip">Skip this step</Link>
				</center>
			</div>

		</div>
		)
	}
};

export default UploadBio;
