import React from 'react';

import SearchBar from './SearchBar';
import GatheringList from './GatheringList';

class LeftPanel extends React.Component {
  render() {
    
    return (
        <div id="menu-container">
            <h1 id="menu-title">Event List</h1>
            <SearchBar />
            <GatheringList />
        </div>
    );
  }
}

export default LeftPanel;