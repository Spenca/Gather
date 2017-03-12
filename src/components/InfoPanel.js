import React from 'react';

class InfoPanel extends React.Component {
  render() {
    


    return (
        <div className=".col-md-6">
            {this.props.data ? (
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h1 id="gathering-title">{this.props.data.title}</h1>
                </div>

                <div className="panel-body">
                  <p><b className="dark-text">Organizer:</b> {this.props.data.organizer}</p>
                  <p><b className="dark-text">Time:</b> {this.props.data.time}</p>
                  <p><b className="dark-text">Date:</b> {this.props.data.date}</p>
                  <p><b className="dark-text">Location:</b> {this.props.data.location}</p>
                  <p><b className="dark-text">Description:</b> {this.props.data.description}</p>
                </div>
			        </div>
              ) : (
                <h1>Select a gathering on the left!</h1>
            )}

            
        </div>
    );
  }
}

export default InfoPanel;