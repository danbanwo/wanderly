import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import UploadComponent from './uploadComponent';

import '../../styles/uploadPic.css';

class UploadPic extends Component {
	render() {
		return (
			<div>
				<div className="uploadPicContainer">
					<center>
						<h1 className="title"> Welcome, traveler!</h1>
						<p id="subTitle"> Add a profile pic so friends can recognize you </p>
						<UploadComponent uploadImage={this.props.props.uploadImage} pathname={this.props.props.routing.locationBeforeTransitions}/>
						<Link id="next" to="bio">Skip this step</Link>
					</center>
				</div>
			</div>
		)
	}
};

export default UploadPic;
