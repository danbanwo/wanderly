import React, { Component } from 'react';
import WanderMap from '../map/map'
import ItineraryBox from '../itinerary/itinerary-container';


const Profile = () => {
  return (
    <div>
      <div>
        <img src='' />
      </div>
      <div style={{width: 500, height:300, background: 'red'}}>
        <WanderMap center={location}/>
      </div>
      <ItineraryBox />
    </div>
  )
}

export default Profile;