import React from 'react';

import Map, { GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

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

		const mapStyle = {
			width: '500px',
			height: '500px',
			marginLeft: 'auto',
			marginRight: 'auto',
		};

		const containerStyle = {
			position: 'relative',
			height: '100%',
			width: '100%'
		};


		return (
			<div id="test">
				<Map
					google={this.props.google}
					onClick={this.onMapClick}
					style={mapStyle}
					containerStyle={containerStyle}>
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
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyCdwgvui98-1bLXE44f9EiNY1qtiKv-woY'
})(MapContainer)