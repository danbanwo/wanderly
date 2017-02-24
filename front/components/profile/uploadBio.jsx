import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import '../../styles/uploadBio.css';

class UploadBio extends Component {
<<<<<<< HEAD

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
=======
	constructor(props) {
	super(props);
		this.state = {
				categories: [],
				catch_phrase: '',
		}
	}
>>>>>>> 8997c5b951069cdb5389ab5692cd157cc189082d

	handleClick = (e) => {
		let check = this.state.categories
		if(check.indexOf(e.target.name) === -1) {
			this.setState({categories: this.state.categories.concat(e.target.name)})
		} else {
			check.splice(check.indexOf(e.target.name), 1)
		}
		console.log(this.state)
	}

	handleChange = (e) => {
		this.setState({catch_phrase: e.target.value})
	}

	submitProfile = () => {
		let UserId = this.props.props.user.id
		let profile = this.props.props.profile.profile
		let arr = profile.categories
		let catch_phrase = this.state.catch_phrase
		let data = {...profile, catch_phrase, categories: arr.concat(this.state.categories), UserId: UserId}
		let { submitProfile } = this.props.props
		console.log('COMPILED DATA===>>>',data)
		console.log('userid===>>>', UserId)
		submitProfile(data)
	}

	render() {
		console.log('In render', this.state)
		console.log('UserId', this.props.props.user.id)
		return (
			<div>
				<div className="bioContainer">
					<center>
					<div className="welcome">
						<h1 className="bioTitle"> Welcome, traveler!</h1>
						<p id="aboutMe"> Tell us a little more about yourself. </p>
					</div>
					<div className="bioButtons">
						<button onClick={this.handleClick} name='Food' type="button" className="btn btn-default one">Food</button>
						<button onClick={this.handleClick} name='Culture & Art' type="button" className="btn btn-default two">Culture & Art</button>
						<button onClick={this.handleClick} name='Relaxation' type="button" className="btn btn-default three">Relaxation</button>
						<button onClick={this.handleClick} name='Backpacking' type="button" className="btn btn-default four">Backpacking</button>
						<button onClick={this.handleClick} name='Activities' type="button" className="btn btn-default five">Activities</button>
						<button onClick={this.handleClick} name='Independence' type="button" className="btn btn-default six">Independence</button>
					</div>

				<div className="bioIntro">
					<p className="questions"> Introduce yourself </p>
					<input onChange={this.handleChange} type="text" placeholder="Write a brief intro..." className="intro"></input>
					<button onClick={this.submitProfile} className="btn btn-default done" type="button">All done!</button>
					<Link to='/' id="skip">Skip this step</Link>
				</div>
			</center>
			</div>
		</div>
		)
	}
};

export default UploadBio;
