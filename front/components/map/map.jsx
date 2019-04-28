import React, { Component, } from 'react';
import { withGoogleMap, GoogleMap, Marker, } from 'react-google-maps';
import '../../styles/map.css';

const WanderGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={2}
    defaultCenter={{ lat: 40.785091, lng: parseFloat('-73.968285'), }}
  >
    {props.markers.map((position, i) => {
        return (<Marker
          position={{ lat: position.lat, lng: position.lng, }}
          key={i}
        />);
    })}
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
        <div id='wandermap'>
          <WanderGoogleMap
            containerElement={
              <div id='wandermap-containerElement' />
            }
            mapElement={
              <div id='wandermap-mapElement' />
            }
            markers={this.props.map}
          />
        </div>
      );
    } else {
      return (
        <div id='wandermap'>
          <WanderGoogleMap
            containerElement={
              <div id='wandermap-containerElement' />
            }
            mapElement={
              <div id='wandermap-mapElement' />
            }
            markers={this.props.mapSpot}
          />
        </div>
      );
    }
  }
}
