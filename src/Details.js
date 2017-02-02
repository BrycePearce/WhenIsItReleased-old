import React from 'react';
import moment from 'moment';
import Search from './Search';

class Details extends React.Component {

    render() {
        const apiPath = this.props.location.state.show;
        console.log(apiPath.release_dates.results[0].release_dates[0].release_date);
        if (this.props.location.state.show.backdrop_path != null) {
            document.body.style.backgroundImage = "url('https://image.tmdb.org/t/p/w1920" + this.props.location.state.show.backdrop_path + "')";
        } else { console.log("backdrop not found"); } //TODO: set this to default background later
        return (
            <div className="resultContainer">
                <Search />
                <h1>Hello from Details</h1>
                <div id="date">{moment(apiPath.release_dates.results[0].release_dates[0].release_date).format('MMMM Do YYYY, h:mm:ss a')}</div>
                <div id="overview"> {apiPath.overview}</div>
            </div>
        )
    }
}
export default Details;