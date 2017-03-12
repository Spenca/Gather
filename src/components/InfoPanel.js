import React from 'react';

class InfoPanel extends React.Component {
  render() {
    


    return (
        <div className=".col-md-6">
            {this.props.data ? (
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h1 id="gathering-title">{this.props.data.name}</h1>
                </div>

                <div className="panel-body">
                  <p><b>Time:</b> {this.props.data.time}</p>
                  <p><b>Date:</b> {this.props.data.date}</p>
                  <p><b>Location:</b> {this.props.data.location}</p>
                  <p><b>Description:</b> {this.props.data.description}</p>
                </div>
			        </div>
              ) : (
                <h1>Select an appointment on the left!</h1>
            )}

            
        </div>
    );
  }
}

export default InfoPanel;