import React from 'react';
import { render } from 'react-dom';
//import our list
import ResultList from './ResultList';
import Key from './Key';

//Add in our components
class App extends React.Component {
    constructor(props) {
        super(props) //not sure if need this 
        this.focus = this.focus.bind(this); //or this
        this.state = {
            //initialize
            myList: []
        }
    }

    focus() {
        //focus the input specified in the onclick={this.focus}
        this.textInput.focus();
    }

    //need to add query
    searchResults() {
        console.log("you hit searchResults, your query = " + this.textInput.value);
        var input = this.textInput.value;
        //don't query the first few characters (api limits to 40 characters per 10sec)
        if (input.length > 2) {
            var posterQuery = 'http://api.themoviedb.org/3/search/movie?query=';

            //do our api call for the list of results
            fetch(posterQuery + input + `&api_key=${Key}`)
                .then((response) => {
                    response.json().then((json) => {
                        //set the state variable 'myList' to the 'results' array of our data
                        //when React sees the state change it will call 'render()' again and redraw things that need to be changed based on the new data
                        this.setState({ myList: json.results })
                    });
                });
        }  if (this.textInput.value == '') {
            this.state.myList  = '';
        }
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={(input) => { this.textInput = input; } }
                    onChange={this.searchResults.bind(this)} /> {/*query results onChange in input*/}

                <h1>Possible Results</h1>
                {/*can call functions between brackets if needed*/}
                <ResultList list={this.state.myList} />
            </div>
        )
    }
}

//first param is what we want to render, second param is where we render it
//(don't change this)
render(<App />, document.getElementById('app'));








/*
class App extends React.Component {

    searchMovie(query) {
      // fetch(myurl + query)
      // or whatever
    }
  
    render() {
        return (
            <div>
                
                <h1>Possible Results</h1>
                <ResultList />
            </div>
        )
    }
}


<ResultList/> needs to be <ResultList myList={myListVar} /> once we pass our info in.


and inside the ResultList component you can access that by doing "this.props.myList"


will need this: https://facebook.github.io/react-native/docs/state.html
so when in your "searchMovie" function you save the results to the components state.

you access state with
this.state
this.state.myVar
*/