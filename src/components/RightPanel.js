import React from 'react';

import SearchBar from './SearchBar';
import GatheringList from './GatheringList';

class RightPanel extends React.Component {
  render() {
    
    return (
        <div className=".col-md-6">
            <div className="panel panel-default">
      			  <div className="panel-heading">
                <h3 className="panel-title">Choose a thing</h3>
              </div>
              <div className="panel-body">
      			     <p>Choosing a thing will do some stuff back over here..</p>
      			     <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
              </div>
			      </div>
        </div>
    );
  }
}

export default RightPanel;