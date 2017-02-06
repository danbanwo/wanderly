import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const CreateMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={11}
    defaultCenter={props.center}
  />

));


export default class Map extends Component {
  render() {
    return (
      <CreateMap
        center={this.props.center}
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
