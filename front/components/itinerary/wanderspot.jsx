import React, {Component} from 'react';
import '../../styles/itinerary.css';
import { browserHistory as history } from 'react-router';

class Wanderspot extends Component {
	//gives access to keyword THIS
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// this.props.getProfile(2)
		this.props.getSpots(this.props.params.destId)
	}

	backToDestinations = () => {
		history.goBack()
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

						<div className='wanderPicContainer'>
							<img className='wanderPic' src={curr.pictures} />
						</div>

					</div>
				</div>
			)
		})
	}

	render() {
		if(!this.props.spots.wanderspotsArr) {
			return (
				<div>
					<button onClick={this.backToDestinations}>Back</button>
					<span>Loading...</span>
				</div>
			)
		}
		else {
			return (
				<div className='returnSpot'>
					<button onClick={this.backToDestinations}>Back</button>
					{this.displaySpots()}
				</div>
			)
		}
	}

}

// const Wanderspot = React.createClass({
// 	wanderRows() {
// 		let wanderData = this.props.spots
// 			{
// 				return wanderData.map( (curr, idx) => {
// 					return (
// 						<div className='wanderRowContainer' key={`wanderRow-${idx}`}>

// 							<div className='wanderPicContainer'>
// 							<img className='wanderPic' src={curr.pictures} />
// 							</div>

// 							<div>
// 							<h4>{curr.place} </h4>
// 							<p>{curr.description} </p>
// 							</div>

// 							<div>
// 							<h4>total spent: </h4>
// 							<p>{curr.total} </p>
// 							</div>

// 							<div>
// 							<h4>category:</h4>
// 							<p>{curr.category} </p>
// 							</div>
// 						</div>
// 					)
// 			})
// 		}
// 	},

// 	render() {
// 		// let display = this.props.spots ? this.wanderRows() : <div>Loading...</div>
// 		// console.log('THIS PROPS SPOTS:',  this.props.spots.pictures)
// 		if(this.props.spots) {
// 			console.log("THIS PROPS SPOTS", this.props.spots)
// 			console.log(this.props.spots[0].pictures)
// 			return (
// 				<div>
// 					{this.wanderRows()}
// 				</div>
// 			)
// 		}
// 		else {
// 			return (
// 				<div>
// 					Loading...
// 				</div>
// 			)
// 		}
// 	}
// })


export default Wanderspot;
