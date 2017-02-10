import React, { Component } from 'react';

class Destination extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    //ProfileId will be used to get all destinations
    //associated with user
    this.props.userDestinations(1)
  }

  displayDestination() {
    const { destinations } = this.props.destinations;
    return destinations.map((destination, i) => (
      <div key={'destination-'+i}>
        <h2 key={'place-'+i}>{destination.place}</h2>
        <p key={'duration-'+i}>DURATION: {destination.duration} </p>
        <p key={'country-'+i}>COUNTRY: {destination.country} </p>
        <p key={'total-'+i}>TOTAL AMOUT SPENT: ${destination.total_spent}</p>
        <hr/>
      </div>
    ))
  }

  render() {
    if(this.props.destinations) {
      return (<div>{this.displayDestination()}</div>)
    }
    else {
      return (<h2>Loading...</h2>)
    }
  }
}


export default Destination;
