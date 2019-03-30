import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Link } from 'react-router';

//Import containers here:
import Destination from '../destination/destination-container';
import Itinerary from '../itinerary/itinerary-container';
import WanderMap from '../map/map';
import Navbar from '../navbar/navbar';
import Modal from '../modal/modal';
import Logout from '../user/Logout';

import '../../styles/profile.css';
import '../../styles/itinerary.css';

class Profile extends Component {
  constructor(props){
    super(props)

    this.state = {
      isModalVisible: false
    }
  }

  closeButton = () => {
    this.setState({
      isModalVisible: false
    })
  }

  displayModal = () => {
    this.setState({
      isModalVisible: true
    })
  }

  render() {
    const {
      profile: {
        profileInfo: {
          catch_phrase,
          country_origin,
          first_name,
          id,
          image,
          last_name
        }
      },
      profile,
      destinations,
      spots: {
        wanderspotsArr,
      },
      routing: {
        locationBeforeTransitions: {
          pathname
        }
      }
    } = this.props;
    const { isModalVisible } = this.state;

    return (
      <div id='master-container'>
        <div className='profileContainer'>
          {
            isModalVisible && <Modal profile={profile} pathname={pathname} addSpot={this.props.addSpot} addDestination={this.props.addDestination} closeButton={this.closeButton} />
          }
          <div className='profileLeft'>
            <div className='profileInfo'>
              <div className='profilePhotoContainer'>
                <img className='profilePhoto' src={image} />
              </div>
              <div className='profileBio'>
                <h2 className="userName">{first_name} {last_name}</h2>
                <p className="userCountry">{country_origin}</p>
                <p className="userBio">{catch_phrase}</p>
                <Link to='/profile' id="edit">Edit Profile</Link>
              </div>
            </div>

            <div className='destList'>
              <hr />
              <div className='addDest' onClick={this.displayModal}></div>
              <hr />
              {this.props.children}
            </div>
          </div>

          <div className='profileRight'>
            <WanderMap map={destinations} mapSpot={wanderspotsArr} test={this.props.getProfile}
              routing={this.props.routing.locationBeforeTransitions} profileId={id}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;
