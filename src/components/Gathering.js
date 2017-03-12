import React from 'react';

class Gathering extends React.Component {
	constructor(props) {
    	super(props);
    }

  	render() {
	    return (
	        <div className="gathering">
	          <h1 className="gathering-title">{this.props.name}</h1>
	          <p>{this.props.address}</p>
	          <p>{this.props.time} {this.props.date}</p>
	        </div>
	    );
  }
}

export default Gathering;