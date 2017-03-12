import React from 'react';
import ReactList from 'react-list';

import Gathering from './Gathering';

class GatheringList extends React.Component {

	constructor(props) {
		super(props);

		let gathering1 = {
			name:"CSC 330 study session",
            address:"Bay Center",
            date:"March 12",
            time:"7:00-9:00PM"
        }
        let gathering2 = {
			name:"CSC 330 study session",
            address:"Bay Center",
            date:"March 12",
            time:"7:00-9:00PM"
        }
        let gathering3 = {
			name:"CSC 330 study session",
            address:"Bay Center",
            date:"March 12",
            time:"7:00-9:00PM"
        }

		this.state = {gatherings: [gathering1, gathering2, gathering3]}

		this.renderItem = this._renderItem.bind(this);
	}

	_renderItem(index, key) {
		
		let gathering = this.state.gatherings[index];
		return (
			<Gathering
				name={gathering.name}
				address={gathering.address}
				date={gathering.date}
				time={gathering.time}
				onSelectGathering={this.props.onSelectGathering}
			/>
		);
	}

  	render() {
	    return (
	        <div id="gathering-list">
	            <ReactList
	            	itemRenderer={this.renderItem}
	            	length={this.state.gatherings.length}
	            	type='uniform'
	            />
	        </div>
	    );
  	}
}

export default GatheringList;