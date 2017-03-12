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
      <div id="main-container">
        <Header />
        <div className="row" >
          <div id="left-panel" className="col-md-4">
            <LeftPanel />
          </div>
          <div id="right-panel"  className="col-md-6">
            <InfoPanel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;