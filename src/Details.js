import React from 'react';
import moment from 'moment';
import Search from './Search';
import Logo from './static/logo.png';
import SearchBox from './SearchBox';

class Details extends React.Component {

    change() {
        this.props.onChange(this.textInput.value);
    }


    render() {
        const apiPath = this.props.location.state.show;
        console.log(apiPath);
        console.log(apiPath.title);
        if (this.props.location.state.show.backdrop_path != null) {
            document.body.style.backgroundImage = "url('https://image.tmdb.org/t/p/w1920" + this.props.location.state.show.backdrop_path + "')";
        } else { console.log("backdrop not found"); } //TODO: set this to default background later
        return (
            <div className="resultContainer">
                <div className="detailsHeader">
                    <img className="resultPoster" src={"https://image.tmdb.org/t/p/w300/" + apiPath.poster_path} />
                    <div className="headerTextElements">
                        <div className="detailsTitle">{apiPath.title}</div>
                        <div className="date"> {moment(apiPath.release_dates.results[0].release_dates[0].release_date).format('MMMM Do YYYY')}</div>
                        <div className="overview"> {apiPath.overview}</div>
                    </div>
                </div>
                <div className="footer">
                    <div className="logoSection"><img id="logo" src={Logo} /> <div className="logoText"> This product uses the TMDb API but is not endorsed or certified by TMDb. </div></div>
                     <div className = "returnSection"> <div className="returnText"><a href="/">Search Again</a></div> </div>
                </div>
            </div>
        )
    }
}
export default Details;
