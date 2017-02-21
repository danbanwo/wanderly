import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

//Import containers here:
import Destination from '../destination/destination';
import ItineraryBox from '../itinerary/itineraryBox';
import WanderMap from '../map/map';
import Navbar from '../navbar/navbar';
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
    /*<Logout actions={this.props.userLogout} />*/
    return (

      <div id='master-container' style={{display: 'flex', flexDirection: 'column', alignItems: 'spaceBetween'}}>
        <Navbar routing={this.props.routing.locationBeforeTransitions} profile={this.props.profile}/>
        <div className='profileContainer' style={{margin: 0}}>
          <div id='renderModal'>
            {/* <DestinationModal /> will render here*/}
          </div>
            <div className='profileLeft' style={{margin: 0, display: 'flex'}}>
              <div style={{height: '40vh'}} className='profileInfo'>
                <div className='profilePhotoContainer'>
                  <img className='profilePhoto' src={this.props.profile.image} />
                </div>
                <div className='profileBio'>
                  <h2>{this.props.profile.first_name} {this.props.profile.last_name}</h2>
                  <h4>{this.props.profile.catch_phrase}</h4>
                  <h4>{this.props.profile.country_origin}</h4>
                </div>
              </div>

              <div className='destList' style={{background: 'pink', height: '52vh', margin: 0,
                'alignSelf': 'flexEnd'
              }}>
                <button onClick={this.displayModal}>ADD</button>
                {this.props.children}
                {/* <Destination destinations={this.props.destinations.destinations} /> */}
              </div>
            </div>

            <div className='profileRight' style={{margin: 0}}>
              <WanderMap map={this.props.destinations.destinations} mapSpot={this.props.spots.wanderspotsArr} test={this.props.getProfile}
                routing={this.props.routing.locationBeforeTransitions} profileId={this.props.profile.id}
              />
            </div>
            --
        </div>
      </div>
    )
  }
}

export default Profile;
