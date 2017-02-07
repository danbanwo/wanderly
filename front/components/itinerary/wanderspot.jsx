import React from 'react';
import '../../styles/itinerary.css';

const WanderSpot = React.createClass({
	wanderRows() {
		let wanderData = this.props.spots
			{
				return wanderData.map( (curr, idx) => {
					return (
						<div className='wanderRowContainer' key={`wanderRow-${idx}`}>

							<div className='wanderPicContainer'>
							<img className='wanderPic' src={curr.pictures} />
							</div>

							<div>
							<h4>{curr.place} </h4>
							<p>{curr.description} </p>
							</div>

							<div>
							<h4>total spent: </h4>
							<p>{curr.total} </p>
							</div>

							<div>
							<h4>category:</h4> 
							<p>{curr.category} </p>
							</div>
						</div>
					)
			})
		}
	},

	render() {
		// let display = this.props.spots ? this.wanderRows() : <div>Loading...</div>
		// console.log('THIS PROPS SPOTS:',  this.props.spots.pictures)
		if(this.props.spots) {
			console.log("THIS PROPS SPOTS", this.props.spots)
			console.log(this.props.spots[0].pictures)
			return (
				<div>
					{this.wanderRows()}
				</div>
			)
		} 
		else {
			return (
				<div>
					Loading...
				</div>
			)
		}
	}
})


export default WanderSpot; 