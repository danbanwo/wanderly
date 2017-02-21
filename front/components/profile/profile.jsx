import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

//Import containers here:
import Destination from '../destination/destination';
import ItineraryBox from '../itinerary/itineraryBox';
import WanderMap from '../map/map';
import DestinationModal from '../modal/destination-modal';
import Logout from '../user/Logout'
import '../../styles/map.css'

class Profile extends Component {
  constructor(props){
    super(props)
  }

  closeButton = () => {
    unmountComponentAtNode(document.getElementById('renderModal'))
  }


  displayModal = () => {
    const { pathname } = this.props.routing.locationBeforeTransitions
    render(<DestinationModal profile={this.props.profile} pathname={pathname} addSpot={this.props.addSpot} addDestination={this.props.addDestination} closeButton={this.closeButton} />, document.getElementById('renderModal'))
  }

  render() {
    return (
      <div className='profileContainer'>
        <Logout actions={this.props.userLogout} />
        <div id='renderModal'>
          {/* <DestinationModal /> */}
        </div>
        <div className='profileLeft'>
          <div className='profileInfo'>
            <div className='profilePhotoContainer'>
              <img className='profilePhoto' src={this.props.profile.image} />
            </div>
            <div className='profileBio'>
              <h2>{this.props.profile.first_name} {this.props.profile.last_name}</h2>
              <h4>{this.props.profile.catch_phrase}</h4>
              <h4>{this.props.profile.country_origin}</h4>
            </div>
          </div>

          <div className='destList'>
            <button onClick={this.displayModal}>ADD</button>
            {this.props.children}
            {/* <Destination destinations={this.props.destinations.destinations} /> */}
          </div>
        </div>

        <div className='profileRight'>
          <WanderMap map={this.props.destinations.destinations} mapSpot={this.props.spots.wanderspotsArr} test={this.props.getProfile}
            routing={this.props.routing.locationBeforeTransitions} profileId={this.props.profile.id}
          />
        </div>
      </div>
    )
  }
}

export default Profile;
