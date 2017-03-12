import React from 'react';

class SearchBar extends React.Component {
    render() {

        return (
            <div id="search-bar">
                <div class="form-group">
                    <label class="control-label" for="focusedInput">Focused input</label>
                    <input class="form-control" id="focusedInput" type="text" placeholder="Search for an event..."/>
                </div>
            </div>
        );
  }
}

export default SearchBar;
