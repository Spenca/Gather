import React from 'react';

import SearchBar from './SearchBar';
import GatheringList from './GatheringList';

class LeftPanel extends React.Component {
  
  render() {
    
    return (
        <div id="left-panel">
            <h1 id="panel-title">Event List</h1>
            <SearchBar />
            <GatheringList 
              onSelectGathering={this.props.onSelectGathering}
            />
        </div>
    );
  }
}

export default LeftPanel;