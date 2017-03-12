import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

class App extends Component {
  render() {
    return (
    	<div className="container">
    		<Header />
		    <div className="row">
		        <div className="col-md-4"><LeftPanel /></div>
		        <div className="col-md-8"><RightPanel /></div>
		    </div>
	    </div>
    );
  }
}

export default App;