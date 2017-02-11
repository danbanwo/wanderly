import React, { Component } from 'react';
import { getProfile } from '../../actions/profile-actions';
import { Link } from 'react-router';


class Destination extends Component {
  constructor() {
    super();
  }

  displayDestination() {
    const { destinations } = this.props;
    return destinations.map((destination, i) => (
      <div key={'destination-'+i}>
        <Link to={'itinerary/'+destination.id}><h2 key={'place-'+i}>{destination.place}</h2></Link>
        <p key={'duration-'+i}>DURATION: {destination.duration} </p>
        <p key={'country-'+i}>COUNTRY: {destination.country} </p>
        <p key={'total-'+i}>TOTAL AMOUT SPENT: ${destination.total_spent}</p>
        <hr/>
      </div>
    ))
  }

  render() {
    console.log('THIS IS GET PROFILE===>>>', getProfile)
    if(this.props.destinations) {
      return (<div>{this.displayDestination()}</div>)
    }
    else {
      return (<h2>Loading...</h2>)
    }
  }
}


export default Destination;
