import React from 'react';

class SearchBar extends React.Component {
    render() {

        return (
            <div className="panel success">
                <div className="input-group">
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button">
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                        </button>
                    </span>
                    <input type="text" className="form-control" placeholder="Search for..." />
                </div>
            </div>
        );
  }
}

export default SearchBar;
