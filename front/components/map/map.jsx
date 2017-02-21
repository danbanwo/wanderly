import React, { Component, } from 'react';
import { withGoogleMap, GoogleMap, Marker, } from 'react-google-maps';

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
    {props.markers.map((position, i) => {
        return (<Marker
          position={{ lat: position.lat, lng: position.lng, }}
          key={i}
        />);
    })}
    {/* </MarkerClusterer> */}
  </GoogleMap>
));


//Below is the Google Map that is rendered to the page
//it is contained within
export default class WanderMap extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { pathname } = this.props.routing;
    if(pathname === '/profile' || pathname === 'profile') {
      return (
        <div style={{width: 868, height: '92vh', background: 'blue'}}>
          <WanderGoogleMap
            containerElement={
              <div style={{ height: '100%', }} />
            }
            mapElement={
              <div style={{ height: '100%', }} />
            }
            markers={this.props.map}
          />
        </div>
      );
    } else {
      return (
        <div style={{width: 868, height: '92vh', background: 'blue'}}>
          <WanderGoogleMap
            containerElement={
              <div style={{ height: '100%', }} />
            }
            mapElement={
              <div style={{ height: '100%', }} />
            }
            markers={this.props.mapSpot}
          />
        </div>
      );
    }
  }
}
