import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import '../../styles/uploadBio.css';

class UploadBio extends Component {

constructor(props){
	super(props)
	this.state = {catch_phrase: '', category:[]}
}

changePhrase = (e) =>{
	this.setState({[e.target.name]: e.target.value})
	console.log(e.target.value,'catch_phrase')
}

selectCategory = (e, key)=>{
	this.setState({'category' : this.state.category.concat([e.target.name])})
	console.log(e.target.name, ': Category')
}

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
						<button name="Food" type="button" className="btn btn-default one" id="btnone" onClick={this.selectCategory}>Food</button>
						<button name="Culture & Art" type="button" className="btn btn-default two" id="btntwo" onClick={this.selectCategory}>Culture & Art</button>
						<button name="Relaxation" type="button" className="btn btn-default three"  id="btnthree"onClick={this.selectCategory}>Relaxation</button>
						<button name="Backpacking" type="button" className="btn btn-default four" id="btnfour" onClick={this.selectCategory}>Backpacking</button>
						<button name="Activities" type="button" className="btn btn-default five"  id="btnfive"onClick={this.selectCategory}>Activities</button>
						<button name="Independence" type="button" className="btn btn-default six"  id="btnsix"onClick={this.selectCategory}>Independence</button>
					</div>
				</div>

			<div className="bioIntro">
				<p className="questions"> Introduce yourself </p>
				<input type="text" placeholder="Write a brief intro..." className="intro"></input>

				<button className="btn btn-default done" type="button">All done!</button>
					<Link to='/profile' id="skip">Skip this step</Link>
				</div>
			</center>

			</div>

		</div>
		)
	}
};

export default UploadBio;
