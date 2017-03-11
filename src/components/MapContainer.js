import React from 'react';
import Map, {GoogleApiWrapper, Marker} from 'google-maps-react';

export class MapContainer extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    
    return (
      <Map google={this.props.google}>
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