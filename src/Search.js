import React from 'react';
import { render } from 'react-dom';
import ResultList from './ResultList';
import Key from './Key';
import SearchBox from './SearchBox';
import { Router, Route, Link } from 'react-router';

//Add in our components 
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.focus = this.focus.bind(this); //or this
        this.state = {
            //initialize (it is initialized to an empty array because things that depend on this.state.myList expect it to be an array)
            myList: []
        }
    }

    focus() {
        //focus the input specified in the onclick={this.focus}
        this.textInput.focus();
    }

    //need to add query
    searchResults(typedCharacter) {
        console.log({ typedCharacter });
        var input = typedCharacter;
        var empty = [];
        //don't query the first few characters (api limits to 40 characters per 10sec)
        if (input.length > 2) {
            var posterQuery = 'http://api.themoviedb.org/3/search/movie?query=';

            //do our api call for the list of results
            fetch(posterQuery + input + `&api_key=${Key}` + '&append_to_response=images')
                .then((response) => {
                    response.json().then((json) => {
                        //set the state variable 'myList' to the 'results' array of our data
                        //when React sees the state change it will call 'render()' again and redraw things that need to be changed based on the new data
                        //document.body.style.background = "https://image.tmdb.org/t/p/w500" + json.results[0].poster_path;
                        this.setState({ myList: json.results })
                    });
                });
        } if (typedCharacter == '') {
            this.setState({ myList: empty });
        }
    }

    render() {
        return (
            <div id="container">
                <h1>Pick a movie any movie</h1>
                <div id="landing-searchBox">
                    <SearchBox onChange={this.searchResults.bind(this)} />
                </div>
                <img id="poster" />
                <ResultList className="result-list" list={this.state.myList} />
            </div>
        )
    }
}
export default Search;