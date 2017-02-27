import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Link } from 'react-router';

//Import containers here:
import Destination from '../destination/destination';
import Itinerary from '../itinerary/itinerary-container';
import WanderMap from '../map/map';
import Navbar from '../navbar/navbar';
import DestinationModal from '../modal/destination-modal';
import Logout from '../user/Logout';

import '../../styles/profile.css';
import '../../styles/itinerary.css';

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
      <div id='master-container'>
        <Navbar routing={this.props.routing.locationBeforeTransitions} action={this.props.userLogout} profile={this.props.profile} />
        <div className='profileContainer'>
          <div id='renderModal'>
            {/* <DestinationModal /> will render here*/}

          </div>
            <div className='profileLeft'>
              <div className='profileInfo'>
                <div className='profilePhotoContainer'>
                  <img className='profilePhoto' src={this.props.profile.image} />
                </div>
                <div className='profileBio'>
                  <h2 className="userName">{this.props.profile.first_name} {this.props.profile.last_name}</h2>
                  <p className="userCountry">{this.props.profile.country_origin}</p>
                  <p className="userBio">{this.props.profile.catch_phrase}</p>
                  <Link to='/profile' id="edit">Edit Profile</Link>
                </div>
              </div>

              <div className='destList'>
                <hr />
                <div className='addDest' onClick={this.displayModal}></div>
                <hr />
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

      </div>
    )
  }
}


export default Profile;
