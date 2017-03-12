import React from 'react';
import ReactList from 'react-list';

import Gathering from './Gathering';
import AddGathering from './AddGathering';

import GatheringStore from './../GatheringStore.js';

import Popup from 'react-popup';

class GatheringList extends React.Component {

	constructor(props) {
		super(props);

		let gathering1 = {
			organizer:"Cindy Lou",
			title:"CSC 330 study session",
            location:"Bay Center",
            date:"March 12",
            time:"7:00PM-9:00PM",
			description:"Studying for CSC 330 because it's really hard. Help pls."
        }
        let gathering2 = {
			organizer:"Jim Bim",
			title:"Hackathon prep",
            location:"Douglas Street McDonalds",
            date:"March 13",
            time:"10:00AM-1:00AM",
			description:"Preparing for the next hackathon in advance because I got rekt at hack UVIC"
        }
        let gathering3 = {
			organizer:"Mr. Lonely",
			title:"Just looking for people to hangout with :(",
            location:"Clearihue Room 130",
            date:"March 14",
            time:"6:00PM-7:00PM",
			description:"I feel so alone"
        }

        this.state = {gatherings: []}

		this.renderItem = this._renderItem.bind(this);
		this.updateGatherings = this._updateGatherings.bind(this);
	}

	componentWillMount() {
		GatheringStore.subscribe(this.updateGatherings);
	}

	componentWillUnmount() {
		GatheringStore.unsubscribe(this.updateGatherings);
	}

	_updateGatherings() {
		this.setState({
			gatherings: GatheringStore.getGatherings()
		})
	}

	_renderItem(index, key) {
		
		let gathering = this.state.gatherings[index];
		return (
			<Gathering
				gathering={gathering}
				onSelectGathering={this.props.onSelectGathering} />
		);
	}

  	render() {
	    return (
	    	<div className="list-group">
	            <ReactList
	            	itemRenderer={this.renderItem}
	            	length={this.state.gatherings.length}
	            	type='uniform'
	            />
				<AddGathering />
				<Popup />
	        </div>
	    );
  	}
}

export default GatheringList;