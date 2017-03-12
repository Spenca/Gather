import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import LeftPanel from './components/LeftPanel';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <LeftPanel />
      </div>
    );
  }
}

export default App;