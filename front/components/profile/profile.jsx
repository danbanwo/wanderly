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

      <div className='profilePhotoContainer'>
        <img className='profilePhoto' src='http://static.boredpanda.com/blog/wp-content/uploads/2016/01/traveling-dog-aspen-the-mountain-pup-instagram-2.jpg' />
      </div>
      Goldie Retrivey
      "I Ruff traveling"

    </div>



    <div className='profileRight'>
        <WanderMap map={props.destinations.destinations} test={props.getProfile}/>
        <Destination destinations={props.destinations.destinations} />
      {/* <ItineraryBox /> */}
    </div>


  </div>
  )
}

export default Profile;
