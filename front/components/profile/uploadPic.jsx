import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import UploadComponent from './uploadComponent';

import '../../styles/uploadPic.css';

class UploadPic extends Component {
	render() {
		return (
			<div>
				<div className="uploadContainer">
					<center>
						<h1 className="title"> Welcome, traveler!</h1>
						<p id="subTitle"> Add a profile pic so friends can recognize you </p>
						<UploadComponent pathname={this.props.props.routing.locationBeforeTransitions}/>
<<<<<<< HEAD
						<Link to="bio">Skip this step</Link>
=======
						<Link id="next" to="bio">Skip this step</Link>
>>>>>>> 8997c5b951069cdb5389ab5692cd157cc189082d
					</center>
				</div>
			</div>
		)
	}
};

export default UploadPic;
//