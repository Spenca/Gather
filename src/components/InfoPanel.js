import React from 'react';

class InfoPanel extends React.Component {
  render() {
    
    return (
        <div className=".col-md-6">
            <div className="panel panel-default">
      			  <div className="panel-heading">
                <h1 id="gathering-title">Gathering Title</h1>
              </div>
              <div className="panel-body">
      			     <p><b>Time:</b> 3:30pm </p>
                 <p><b>Date:</b> Monday March 13th </p>
                 <p><b>Location:</b> 3rd Floor ECS, room 330</p>
      			     <p><b>Description:</b> Practicing for a hackathon if anyone is interested.</p>
              </div>
			      </div>
        </div>
    );
  }
}

export default InfoPanel;