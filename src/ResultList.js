import React from 'react';
import Key from './Key';
import Search from './Search';
import fillerImage from './static/notfound.png';

class ResultList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            //initialize (it is initialized to an empty array because things that depend on this.state.myList expect it to be an array)
            clickedInformation: false
        }
    }

    //handle clicked "li" events
    handleItem(item) {
        //release date + description + etc api query
        fetch('http://api.themoviedb.org/3/movie/' + item.id + "?api_key=" + Key + '&append_to_response=release_dates')
            .then((response) => {
                response.json().then((json) => {
                    this.context.router.push({
                        pathname: 'details',
                        state: {
                            show: json
                        }
                    });
                });
            });
    }

    render() {
        //map: we are mapping each item in the array to a html list item '<li>' so when the '.map()' is done running
        //'allTheListItems' will be an array of <li>'s
        let allTheListItems = this.props.list.map((item) => {
            // curly braces { } tell react to get the value of the javascript inside of it
            // so we are putting the value of 'item' inside <li> tags
            let poster = "https://image.tmdb.org/t/p/w92/" + item.poster_path;
            if (item.poster_path == null) { poster = fillerImage };
            return <li onClick={this.handleItem.bind(this, item)}><img className="posters" src={poster} /> <div className="title">{item.title} </div> </li>;
        });

        //if clickedInformation is available
        if (this.state.clickedInformation) {
            console.log("movie has been selected");
            let date = moment(this.state.clickedInformation.release_date).format('MMMM Do YYYY, h:mm:ss a');
            return (
                <h1>Hi there, Dvd release date goes here</h1>
            )
        } else {
            return (
                <ul>
                    {allTheListItems}
                </ul>
            )
        }
    }
}

//request the router context in your component
ResultList.contextTypes = {
    router: React.PropTypes.object
};

export default ResultList;