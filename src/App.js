import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import InfoPanel from './components/InfoPanel';

import Firebase from './firebase/Firebase';
import Database from './firebase/Database';

class App extends Component {


  _updateInfoPanel(gathering) {
    this.setState(
      {
        infoData: gathering
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      infoData: null
    }
    this.updateInfoPanel = this._updateInfoPanel.bind(this);
    Firebase.initialize();
    Database.setListener();
  }

  render() {
    return (
      <div id="main-container">
        <Header />
        <div className="row">
          <div id="left-panel" className="col-md-4">
            <LeftPanel 
            onSelectGathering={this.updateInfoPanel}
            />
          </div>
          <div id="right-panel"  className="col-md-6">
            <InfoPanel 
              data={this.state.infoData}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;