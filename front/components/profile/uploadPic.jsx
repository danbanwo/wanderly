import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import '../../styles/uploadPic.css';

class UploadPic extends Component {

	render() {
		return (
			<div>
				<div className="uploadContainer">
					<center>
						<h1 className="title"> Welcome, traveler!</h1>
						<p id="subTitle"> Add a profile pic so friends can recognize you </p>
						<form action="/api/profile/upload" encType="multipart/form-data" method="post">
							<input id="file" type="file" name="upload" multiple/>
							<input className="btn btn-default" type="submit" value="Upload photo"/>
						</form>
						<Link to="createbio">Skip this step</Link>
					</center>
				</div>
			</div>
		)
	}
};

export default UploadPic;
