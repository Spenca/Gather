import React from 'react';

class Gathering extends React.Component {
	constructor(props) {
    	super(props);
    }

  	render() {
	    return (
	    	<a type="button" href="#" className="list-group-item">
		          <h4 className="list-group-item-heading">{this.props.name}</h4>
		          <p className="list-group-item-text">{this.props.address}</p>
		          <p className="list-group-item-text">{this.props.time} {this.props.date}</p>
		    </a>
	    );
  }
}

export default Gathering;