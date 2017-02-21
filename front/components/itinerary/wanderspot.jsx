import React, {Component} from 'react';
import { Link } from 'react-router';

import '../../styles/itinerary.css';
import { browserHistory as history } from 'react-router';

//import eatIcon from '../../ui/Icon_Food.svg';

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
		//get the value of the Destinations' Wanderspots
		let spots = this.props.spots.wanderspotsArr.reverse()
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
				<div key={idx}>

					<div className='wanderSpotContainer'>

						<div className='wanderLeft'>
							<div>
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


						<div className='wanderRight'>
							<div className='spotPicContainer'>
								<img className='spotPic' src={curr.pictures} />
							</div>
						</div>

					</div>
					<hr className="lineBreak"></hr>
				</div>
			)
		})
	}

	render() {
		console.log('THIS THIS THIS ===>', this)
		if(!this.props.spots.wanderspotsArr) {
			return (
				<div>
					<button onClick={this.backToDestinations}>Back</button>
					<div>Loading...</div>
				</div>
			)
		}
		else {
			return (
				<div className='returnSpot'>
					{/* <Link to={'/spot/add/'+this.props.params.destId}> */}
					{/* <button className='addButton' type="button">add spot</button> */}
					{/* </Link> */}
					<button onClick={this.backToDestinations}>Back</button>
					{this.displaySpots()}
				</div>
			)
		}
	}
}

export default Wanderspot;
