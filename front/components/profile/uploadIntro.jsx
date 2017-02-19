import React from 'react';
import axios from 'axios';
import {browserHistory} from 'react-router';

import '../../styles/uploadIntro.css';

const UploadIntro = React.createClass({

onClick(e){
	browserHistory.push('/createprofile');
},
	render(){
		return(
		<div>

		<div className="introContainer">
		<center>
		<h1 className="bioTitle"> Welcome, traveler!</h1>
		<p className="aboutYou"> Tell us a little more about yourself. </p>

		<input type="text" className="name"placeholder="Name"></input>


		<div className="dropdwn">
			<button className="btn btn-default dropdown-toggle"
				type="button"
				data-toggle="dropdwn">Home Country

			<span className="caret"></span>	
			</button>	
			
			<ul className="dropdown-menu">
				<li><a href="#">USA</a></li>
				<li><a href="#">CA</a></li>
				<li><a href="#">UK</a></li>
				<li><a href="#">CN</a></li>
				<li><a href="#">AF</a></li>
				<li><a href="#">FR</a></li>
			</ul>
		</div>

		<button type="button" className="btn btn-default continue" onClick={this.onClick}>Continue</button>

		</center>
		</div>

		</div>

		)
	}
});

export default UploadIntro;
