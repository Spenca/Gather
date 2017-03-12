import React from 'react';

import SearchBar from './SearchBar';
import GatheringList from './GatheringList';

class LeftPanel extends React.Component {
  
  render() {
    return (
        <div >
            <h3 id="gathering-list-title">Gathering List</h3>
            <SearchBar />
            <GatheringList 
              onSelectGathering={this.props.onSelectGathering}
            />
        </div>
    );
  }
}

export default LeftPanel;