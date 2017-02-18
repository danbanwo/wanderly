import React, { Component } from 'react';
import { getProfile } from '../../actions/profile-actions';
import { Link } from 'react-router';
import { render } from 'react-dom';
import DestinationModal from '../modal/destination-modal';


class Destination extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getProfile(2)
  }

  displayDestination() {
    const { destinations } = this.props.destinations;
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
    console.log(this.props)
    if(this.props.destinations) {
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
