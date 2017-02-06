import React, { Component } from 'react';
import WanderMap from '../map/map'
import ItineraryBox from '../itinerary/itinerary-container';

import '../../styles/map.css'

const Profile = () => {
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
      <div style={{width: 520, height: 300, background: 'blue'}}>
        <WanderMap center={location}/>
      </div>
      <ItineraryBox />
    </div>


  </div>
  )
}

export default Profile;