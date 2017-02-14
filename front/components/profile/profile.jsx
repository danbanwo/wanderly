import React from 'react';

//Import containers here:
import Destination from '../destination/destination'
import ItineraryBox from '../itinerary/itineraryBox';
import WanderMap from '../map/map'

import '../../styles/map.css'

const Profile = (props) => {
  return (
  <div className='profileContainer'>
    <div className='profileLeft'>
      <div className='profileInfo'>
        <div className='profilePhotoContainer'>
          <img className='profilePhoto' src={props.profile.image} />
        </div>
        <div className='profileBio'>
         <h2>{props.profile.first_name} {props.profile.last_name}</h2>
          <h4>{props.profile.catch_phrase}</h4>
          <h4>{props.profile.country_origin}</h4>
        </div>
      </div>

      <div className='destList'>
      <Destination destinations={props.destinations.destinations} />
      </div>
    </div>

    <div className='profileRight'>
        <WanderMap map={props.destinations.destinations} test={props.getProfile}/>
    </div>

  </div>
  )
}

export default Profile;
