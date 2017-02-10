import React, { Component, } from 'react';
import { withGoogleMap, GoogleMap, Marker, } from 'react-google-maps';
import fetch from 'isomorphic-fetch';

// import MarkerClusterer from "../../../lib/addons/MarkerClusterer";

const WanderGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 40.785091, lng: parseFloat('-73.968285'), }}
  >
    {/* <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    > */}
    {props.markers.map((destination, i) => {
        return (<Marker
          position={{ lat: destination.lat, lng: destination.lng, }}
          key={i}
        />);
    })}
    {/* </MarkerClusterer> */}
  </GoogleMap>
));

export default class WanderMap extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.markers()
  }

  render() {
    const { markers } = this.props.map;
    return (
      <div style={{width: 520, height: 300, background: 'blue'}}>
        <WanderGoogleMap
          containerElement={
            <div style={{ height: '100%', }} />
          }
          mapElement={
            <div style={{ height: '100%', }} />
          }
          markers={markers}
        />
      </div>
    );
  }
}
