import React from 'react';
import axios from 'axios';

import WanderSpot from './wanderspot';
import '../../styles/itinerary.css';


const ItineraryBox = React.createClass({
	getInitialState() {
		return {wanderSpots: null}
	},

	componentDidMount() {
		this.props.getSpots(this.props.params.destId)
		axios.get('/api/wanderspot')
		.then((itineraryObj) => {
			console.log(itineraryObj)
			let data = itineraryObj.data
			this.setState({wanderSpots: data})
		})
	},

	render() {
		console.log(this.state)
		let spots = this.state.wanderSpots
		return (
			<div className='itineraryContainer'>
				<WanderSpot spots={spots}/>
			</div>
		)
	}
})

export default ItineraryBox;
