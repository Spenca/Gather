import React from 'react';

class Gathering extends React.Component {
	constructor(props) {
    	super(props);
    }

  	render() {
	    return (
	        <div id="gathering">
	          {this.props.name}<br/>
	          {this.props.address}<br/>
	          {this.props.date}<br/>
	          {this.props.time}
	        </div>
	    );
  }
}

export default Gathering;