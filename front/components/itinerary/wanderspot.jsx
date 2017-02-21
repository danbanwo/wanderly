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
		//get value of wanderspots
		let spots = this.props.spots.wanderspotsArr.reverse()
		return spots.map((curr, idx) => {
			var categoryIcon;
			if(curr.category == 'eat') {
				categoryIcon = <eatIcon />
			}
			return (
				<div key={idx}>
					<div className='wanderRowContainer'>

						<div className='rowInfo'>
							<div className='spotName'>
								<div>{curr.spot} </div>
							</div>

							<div className='categoryTotal'>
								<div>category:</div>
								<div>{curr.category}</div>
								<div>{curr.total} </div>
							</div>

							<div className='spotDesc'>
								<div>{curr.description} </div>
								<div className='sample'></div>
							</div>

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
