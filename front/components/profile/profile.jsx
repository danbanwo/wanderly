import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

//Import containers here:
import Destination from '../destination/destination';
import ItineraryBox from '../itinerary/itineraryBox';
import WanderMap from '../map/map';
import DestinationModal from '../modal/destination-modal';

import '../../styles/map.css'
import '../../styles/userProfile.css'

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
        <div id='renderModal'>
          {/* <DestinationModal /> */}
        </div>
        <div className='profileLeft'>
          <div className='profileInfo'>

            <div className='profilePhotoContainer'>
              <img className='profilePhoto' src={this.props.profile.photo} />
            </div>

            <div className='profileBio'>
              <hr/>
              <h2 className="userName"> Jane Doe {/*this.props.profile.fullName*/} </h2>
              <p className="userGender"> Female{/*this.props.profile.gender*/}</p>
              <p className="userCountry"> United States{/*this.props.profile.country_origin*/}</p>
              <p className="userInfo"> I'm here for a good time, not a long time!{/*this.props.profile.catch_phrase*/}</p>
               <a id="editProfile">Edit Profile</a>
            </div>

          </div>
          <div className='destList'>
            <button onClick={this.displayModal} className="addButton">ADD</button>
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
