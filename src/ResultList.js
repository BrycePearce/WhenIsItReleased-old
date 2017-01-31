import React from 'react';
import Key from './Key';
import moment from 'moment';
import fillerImage from './static/notfound.png';
class ResultList extends React.Component {
        constructor(props) {
        super(props) //not sure if need this 
        this.state = {
            //initialize (it is initialized to an empty array because things that depend on this.state.myList expect it to be an array)
            clickedInformation: []
        }
    }

    //handle clicked "li" events
    handleItem(item) {
        //dvd query
        fetch('http://api.themoviedb.org/3/movie/' + item.id + "/release_dates?api_key=" + Key)
            .then(function (response) {
                response.json().then(function (json) {
                    let date = moment(json.results[0].release_dates[0].release_date).format('MMMM Do YYYY, h:mm:ss a');
                    document.getElementById("date").innerText = date;
                    console.log(json.results[0]);
                    this.setState({ clickedInformation: json.results[0] });
                });
            });
        if (item.backdrop_path != null) {
            document.body.style.backgroundImage = "url('https://image.tmdb.org/t/p/w1920" + item.backdrop_path + "')";
        } else { console.log("backdrop not found"); } //TODO: set this to default background later
    }

    render() {
        console.log(this.state.clickedInformation);
        
        //map: we are mapping each item in the array to a html list item '<li>' so when the '.map()' is done running
        //'allTheListItems' will be an array of <li>'s
        let allTheListItems = this.props.list.map((item) => {
            // curly braces { } tell react to get the value of the javascript inside of it
            // so we are putting the value of 'item' inside <li> tags
            let poster = "https://image.tmdb.org/t/p/w92/" + item.poster_path;
            if (item.poster_path == null) { poster = fillerImage };
            return <li onClick={this.handleItem.bind(this, item)}><img className="posters" src={poster} /> <div className="title">{item.title} </div> </li>;
        });
        return (
            <ul>
                {/*
                  render our array of <li>'s
                */}

                {allTheListItems}
            </ul>
        )
    }
}

export default ResultList;