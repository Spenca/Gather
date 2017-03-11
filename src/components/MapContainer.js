import React from 'react';
<<<<<<< HEAD
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
=======
import Map, {GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';

export class MapContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {},
		}

		this.onMapClick = this._onMapClick.bind(this);
		this.onMarkerClick = this._onMarkerClick.bind(this);
	}

	_onMapClick(props, marker, e) {
		if (this.state.showingInfoWindow) {
      		this.setState({
        		showingInfoWindow: false,
        		activeMarker: {}
      		})
    	}
	}

	_onMarkerClick(props, marker, e) {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		})
	}

	render() {
    	if (!this.props.loaded) {
      		return <div>Loading...</div>
    	}
    
	    return (
	      <Map 
	      	google={this.props.google}
	      	onClick={this.onMapClick}>
          {/*centerAroundCurrentLocation={true}*/}
	      	<Marker
	      		onClick={this.onMarkerClick}
	      		name={'location'} />
	      	<InfoWindow
          		marker={this.state.activeMarker}
          		visible={this.state.showingInfoWindow}
          		onClose={this.onMapClick}>
            	<div>
              		<h1>{this.state.selectedPlace.name}</h1>
            	</div>
        	</InfoWindow>
	      </Map>
	    );
  	}
>>>>>>> 44a0902ce012ae396d47bf8c08c9c75c212b39de
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCdwgvui98-1bLXE44f9EiNY1qtiKv-woY'
})(MapContainer)