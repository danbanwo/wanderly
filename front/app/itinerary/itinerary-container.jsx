import React from 'react';
import axios from 'axios';

import WanderSpot from './wanderspot';


const ItineraryBox = React.createClass({
	getInitialState() {
		return {wanderSpots: null}
	},

	componentDidMount() {
		axios.get('/api/itinerary')
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
			<div>
				itin box START
				<WanderSpot spots={spots}/>
				itin box END
			</div>
		)
	}
})

export default ItineraryBox;