import React from 'react';

class SearchBar extends React.Component {
    render() {

        return (
            <div class="form-group">
                <label class="control-label" for="focusedInput">Focused input</label>
                <input class="form-control" id="focusedInput" type="text" value="This is focused..."/>
            </div>
        );
  }
}

export default SearchBar;