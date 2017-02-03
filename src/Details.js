import React from 'react';
import moment from 'moment';
import Search from './Search'
import SearchBox from './SearchBox';

class Details extends React.Component {

    change() {
        this.props.onChange(this.textInput.value);
    }
    
    render() {
        const apiPath = this.props.location.state.show;
        console.log(apiPath);
        if (this.props.location.state.show.backdrop_path != null) {
            document.body.style.backgroundImage = "url('https://image.tmdb.org/t/p/w1920" + this.props.location.state.show.backdrop_path + "')";
        } else { console.log("backdrop not found"); } //TODO: set this to default background later
        return (
            <div className="resultContainer">
                <SearchBox /> <Search/>
                <div id="date">{moment(apiPath.release_dates.results[0].release_dates[0].release_date).format('MMMM Do YYYY, h:mm:ss a')}</div>
                <div id="overview"> {apiPath.overview}</div>
                <img className="resultPoster" src={"https://image.tmdb.org/t/p/w92/" + apiPath.poster_path} />
            </div>
        )
    }
}
export default Details;