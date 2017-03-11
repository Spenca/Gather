import React from 'react';
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
        		activeMarker: null
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
	      		ref='testRef'
	      		onClick={this.onMarkerClick}
	      		name={'location'} />
	      	<InfoWindow
          		marker={this.state.activeMarker}
          		visible={this.state.showingInfoWindow}>
            	<div>
              		<h1>{this.state.selectedPlace.name}</h1>
            	</div>
        	</InfoWindow>
	      </Map>
	    )
  	}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCdwgvui98-1bLXE44f9EiNY1qtiKv-woY'
})(MapContainer)