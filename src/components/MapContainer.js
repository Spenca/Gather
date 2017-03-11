import React from 'react';
import Map, { GoogleApiWrapper, Marker } from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }

    const mapStyle = {
      width: '50%',
      height: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
    };

    return (
      <Map id="map" google={this.props.google} style={mapStyle} >
        <Marker
          onClick={() => alert('you clicked a marker!')}
          name={'location'}
        />
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCdwgvui98-1bLXE44f9EiNY1qtiKv-woY'
})(MapContainer)