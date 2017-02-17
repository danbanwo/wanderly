import React, {Component} from 'react';
import { Link } from 'react-router';

import '../../styles/itinerary.css';

class Wanderspot extends Component {
	//gives access to keyword THIS
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.getSpots(this.props.params.destId)
	}

	displaySpots = () => {
		//get value of wanderspots
		return this.props.spots.wanderspotsArr.map((curr, idx) => {
			return (
				<div key={idx}>
					<div className='wanderRowContainer'>

						<div className='spotDesc'>
							<h2>{curr.spot} </h2>
							<h5>{curr.description} </h5>
						</div>

						<div className='total'>
							<h4>total spent: </h4>
							<h5>{curr.total} </h5>
						</div>

						<div className='category'>
							<h4>category:</h4> 
							<h5>{curr.category} </h5>
						</div>
						<h1>CURRENT ID: {curr.id}</h1>

						<div className='wanderPicContainer'>
							<img className='wanderPic' src={curr.pictures} />

						</div>

					</div>
				</div>
			)
		})
	}

	render() {
		console.log('THIS THIS THIS ===>', this)
		if(!this.props.spots.wanderspotsArr) {
			return (
				<div>Loading...</div>
			)
		} 
		else {
			return (
				<div className='returnSpot'>
					<Link to={'/spot/add/'+this.props.params.destId}>
					<button className='addButton' type="button">add spot</button>
					</Link>
					{this.displaySpots()}
				</div>
			)
		}
	}
}



export default Wanderspot; 