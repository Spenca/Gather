import React from 'react';

class Gathering extends React.Component {
	constructor(props) {
    	super(props);
    }

  	render() {
	    return (
	    	<a type="button" href="#" className="list-group-item" onClick={() => this.props.onSelectGathering(this.props.gathering)}>
		          <h4 className="list-group-item-heading">{this.props.gathering.title}</h4>
		          <p className="list-group-item-text">{this.props.gathering.address}</p>
		          <p className="list-group-item-text">{this.props.gathering.time} {this.props.gathering.date}</p>
		    </a>
	    );
  }
}

export default Gathering;