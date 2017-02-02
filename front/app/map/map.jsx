import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const CreateMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={13}
    defaultCenter={{
      lat: 40.7575285,
      lng: -73.9884469
      }}
  />
));


export default class Map extends Component {
  render() {
    return (
      <CreateMap
        containerElement={
          <div style={{ height:'100%', width: `100%` }} />
        }
        mapElement={
          <div style={{ height: '100%', width: `100%` }} />
        }
      />
    );
  }
}
