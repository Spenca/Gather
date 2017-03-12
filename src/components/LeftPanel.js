import React from 'react';

import SearchBar from './SearchBar';
import GatheringList from './GatheringList';

class LeftPanel extends React.Component {
  render() {
    
    return (
        <div className=".col-md-6">
            <h3>Event List</h3>
            <SearchBar />
        	<GatheringList />
        </div>
    );
  }
}

export default LeftPanel;