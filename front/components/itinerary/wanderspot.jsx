import React, {Component} from 'react';
import { Link } from 'react-router';
import { browserHistory as history } from 'react-router';

import '../../styles/itinerary.css';

class Wanderspot extends Component {
	//gives access to keyword THIS
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		this.props.getSpots(this.props.params.destId)
	}

	backToDestinations = () => {
		history.goBack()
	}

	displaySpots = () => {
		//get the value of the Destinations' Wanderspots
		let spots = this.props.spots.wanderspotsArr
		if(spots.length === 0) {
			return <div>Add a Spot</div>
		} else {
			return spots.map((curr, idx) => {
				//render the correct Icon for the spots' category
				var categoryIcon;
				if(curr.category == 'eat') {
					categoryIcon = (<div className='iconFood'></div>)
				}
				else if(curr.category == 'play') {
					categoryIcon = (<div className='iconFun'></div>)
				}
				else if(curr.category == 'sleep') {
					categoryIcon = (<div className='iconLodging'></div>)
				}
				return (
						<div className='wanderSpotContainer'>
							<div className='wanderLeft'>
								<div className='spotPicContainer'>
									<img className='spotPic' src={curr.pictures} />
								</div>
							</div>

							<div className='wanderRight'>
								<div className='spotName'>
									<span>{curr.spot} </span>
								</div>

								<div className='spotCategoryTotal'>
									<div className='spotIcon'>{categoryIcon}</div>
									<div className='spotTotal'>${curr.total}</div>
								</div>

								<div className='spotDesc'>
									<div>{curr.description} </div>
								</div>
							</div>
							<hr className="lineBreak"></hr>
						</div>
				)
			})
		}
	}

	render() {
		if(!this.props.spots.wanderspotsArr) {
			return (
				<div className='backAddButtons'>
					<div className='backButton' onClick={this.backToDestinations}></div>
					<div>Loading...</div>
				</div>
			)
		}
		else {
			return (
				<div>
					<div className='backButton' onClick={this.backToDestinations}></div>
					<div className='returnSpot'>
						{this.displaySpots()}
					</div>
				</div>
			)
		}
	}
}

export default Wanderspot;
