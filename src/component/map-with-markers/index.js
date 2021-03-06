import './_map-with-markers.scss';
import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import MarkerClusterer from 'react-google-maps/lib/components/addons/MarkerClusterer';
import { compose, withProps } from 'recompose';
import fetch from 'isomorphic-fetch';

const MapWithAMarkerClusterer = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDOTFGuAM5KLro5-_3oNBKzpKYLhcVXZxg&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px`, margin: '10px 0 0 0' }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 47.606, lng: -122.332 }}
  >
    <MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker._id}
          position={{ lat: marker.lat, lng: marker.lng }}
          icon={{
            url: marker.icon,
          }}
        />
      ))}
    </MarkerClusterer>
  </GoogleMap>
);

class MapWithMarkers extends React.PureComponent {
  componentWillMount() {
    this.setState({ markers: [] });
  }

  componentDidMount() {
    const url = ['https://gist.githubusercontent.com/ratiphi/596fe4d088b6e2ce48087eb10e9b9ab1/raw/584b7d01d0b4e116fa22430cc752a31d9db16554/data.json'];

    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({ markers: data.locations });
      });
  }

  render() {
    return (
      <div>
        <MapWithAMarkerClusterer markers={this.state.markers} />
      </div>
    );
  }
}

export default MapWithMarkers;
