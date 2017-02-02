import React from 'react';
import Search from './Search';

class SearchBox extends React.Component {

    change() {
        this.props.onChange(this.textInput.value);
    }

    render() {
        return (
            <input
                type="text"
                placeholder="Enter a movie"
                ref={(input) => { this.textInput = input; } }
                onChange={this.change.bind(this)} />
        )
    }
}
export default SearchBox;