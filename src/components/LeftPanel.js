import React from 'react';

import SearchBar from './SearchBar';
import Gathering from './Gathering';

class LeftPanel extends React.Component {
  render() {
    
    return (
        <div id="menu-container">
            <h1 id="menu-title">Event List</h1>
            <SearchBar />
            <Gathering
            	name={"CSC 330 study session"}
            	address ={"Bay Center"}
            	date={"March 12"}
            	time={"7:00-9:00PM"}
            />
        </div>
    );
  }
}

export default LeftPanel;