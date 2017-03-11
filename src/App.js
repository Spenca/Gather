import React, { Component } from 'react';
import './App.css';

import HeaderComponent from './components/HeaderComponent';
import MapContainer from './components/MapContainer.js';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <MapContainer />
      </div>
    );
  }
}

export default App;
