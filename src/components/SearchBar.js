import React from 'react';

class SearchBar extends React.Component {
    render() {

        return (
            <div id="search-bar">
                <div className="form-group">
                    <label className="control-label" >Search for a gathering</label>
                    <input className="form-control" type="text" value="Search for a gathering"/>

                </div>
            </div>
        );
  }
}

export default SearchBar;