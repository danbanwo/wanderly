import React from 'react';

const WanderSpot = React.createClass({
	wanderRows() {
		let wanderData = this.props.spots
			{
				return wanderData.map( (curr, idx) => {
					return (
						<div>
							<div>
							PICTURES: <li key={idx}>{curr.pictures} </li>
							</div>

							<div>
							place: <li key={idx}>{curr.place} </li>
							description: <li key={idx}>{curr.description} </li>
							</div>

							<div>
							total: <li key={idx}>{curr.total} </li>
							</div>

							<div>
							category: <li key={idx}>{curr.category} </li>
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