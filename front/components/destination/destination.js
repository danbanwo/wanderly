import React, { Component } from 'react';
import { Link } from 'react-router';
import { render } from 'react-dom';
import DestinationModal from '../modal/destination-modal';

import '../../styles/destination.css'



class Destination extends Component {
  constructor(props) {
    super(props);
  }

  displayDestination() {
    const { destinations } = this.props.destinations;
    // let dests = destinations.reverse()
    return destinations.map((destination, i) => (
      <div key={'destination-'+i}>
        <Link to={{pathname: 'itinerary/'+destination.id, query: {place: destination.place}}}><h2 key={'place-'+i}>{destination.place}</h2></Link>
        <p key={'duration-'+i}>DURATION: {destination.duration} </p>
        <p key={'country-'+i}>COUNTRY: {destination.country} </p>
        <p key={'total-'+i}>TOTAL AMOUT SPENT: ${destination.total_spent}</p>
        <hr/>
      </div>
    ))
  }

  render() {
    if(this.props.profile.id) {
      return (
        <div id='master_itinerary'>
          {this.displayDestination()}
        </div>
      )
    }
    else {
      return (<h2>Loading...</h2>)
    }
  }
}


export default Destination;
