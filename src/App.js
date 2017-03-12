import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import InfoPanel from './components/InfoPanel';

class App extends Component {

  updateInfoPanel(gathering) {
     alert("gathering name: " + gathering.name);
  }



  render() {
    return (
      <div>
          <Header />
          <div id="main-container">
            <LeftPanel 
              onSelectGathering={this.updateInfoPanel}
            />
            <InfoPanel 
            />
          </div>
      </div>
    );
  }
}

export default App;