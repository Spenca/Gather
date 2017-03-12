import React from 'react';
import ReactList from 'react-list';

import Gathering from './Gathering';
import AddGathering from './AddGathering';

class GatheringList extends React.Component {

	constructor(props) {
		super(props);

		let gathering1 = {
			name:"CSC 330 study session",
            location:"Bay Center",
            date:"March 12",
            time:"7:00-9:00PM",
			description:"Studying for CSC 330 because it's really hard. Help pls."
        }
        let gathering2 = {
			name:"Hackathon prep",
            location:"Douglas Street McDonalds",
            date:"March 13",
            time:"10:00AM-1:00AM",
			description:"Preparing for the next hackathon in advance because I got rekt at hack UVIC"
        }
        let gathering3 = {
			name:"Just looking for people to hangout with :(",
            location:"Clearihue Room 130",
            date:"March 14",
            time:"6:00PM-7:00PM",
			description:"I feel so alone"
        }

		this.state = {gatherings: [gathering1, gathering2, gathering3]}

		this.renderItem = this._renderItem.bind(this);
	}

	_renderItem(index, key) {
		
		let gathering = this.state.gatherings[index];
		return (
			<Gathering
				gathering={gathering}
				onSelectGathering={this.props.onSelectGathering}
			/>
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
	        </div>
	    );
  	}
}

export default GatheringList;