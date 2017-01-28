import React from 'react';
import Key from './Key';

/*
so say you wanted to pass a list of stuff to your ResultsList component. you could do 

<ResultList myList={myListVar} />

and inside the ResultList component you can access that by doing 'this.props.myList'
*/
class ResultList extends React.Component {

    //handle clicked "li" events
    handleItem(item) {
        //dvd query
        fetch('http://api.themoviedb.org/3/movie/' + item.id + "/release_dates?api_key=" + Key)
            .then(function (response) {
                response.json().then(function (json) {
                    document.getElementById("date").innerText = json.results[0].release_dates[0].release_date;
                });
            });
        document.body.style.backgroundImage = "url('https://image.tmdb.org/t/p/original" + item.backdrop_path + "')";
    }

    render() {
        //map: we are mapping each item in the array to a html list item '<li>' so when the '.map()' is done running
        //'allTheListItems' will be an array of <li>'s
        let allTheListItems = this.props.list.map((item) => {
            // curly braces { } tell react to get the value of the javascript inside of it
            // so we are putting the value of 'item' inside <li> tags
            return <li onClick={this.handleItem.bind(this, item)}>{item.title}</li>;
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