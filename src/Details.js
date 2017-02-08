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
        /*
        //handle external requests
        if (this.state.props == undefined) {
            
        }*/
        const apiPath = this.props.location.state.show;
        const releasePath = apiPath.release_dates;
        let releaseDate = "";


        if (apiPath.backdrop_path != undefined) {
            document.body.style.backgroundImage = "url('https://image.tmdb.org/t/p/w1920" + this.props.location.state.show.backdrop_path + "')";
        } else { console.log("backdrop not found"); } //TODO: set this to default background later
        //find the date for US release
        if (releasePath.results.length > 0) {
            for (var i = 0; i < releasePath.results.length; i += 1) {
                if (releasePath.results[i].iso_3166_1 == "US") {
                    //now find the type: 4 digital, 5 physical
                    for (var q = 0; q < releasePath.results[i].release_dates.length; q += 1) {
                        if (releasePath.results[i].release_dates[q].type == "4") {
                            releaseDate = moment(releasePath.results[i].release_dates[q].release_date).format('MMMM Do YYYY');
                        }
                        else if (releasePath.results[i].release_dates[q].type == "5") {
                            releaseDate = moment(releasePath.results[i].release_dates[q].release_date).format('MMMM Do YYYY');
                        }
                        else {
                            releaseDate = "No US release date available";
                        }
                    }
                    break;
                }
            }
        } else {
            releaseDate = "Date Unavailable";
        }

        return (
            <div className="resultContainer">
                <div className="detailsHeader">
                    <img className="resultPoster" src={"https://image.tmdb.org/t/p/w300/" + apiPath.poster_path} />
                    <div className="headerTextElements">
                        <div className="detailsTitle">{apiPath.title}</div>
                        <div className="date">{releaseDate}</div>
                        <div className="overview"> {apiPath.overview}</div>
                    </div>
                </div>
                <div className="footer">
                    <div className="logoSection"><img id="logo" src={Logo} /> <div className="logoText"> This product uses the TMDb API but is not endorsed or certified by TMDb. </div></div>
                    <div className="returnSection"> <div className="returnText"><a href="/">Search Again</a></div> </div>
                </div>
            </div>
        )
    }
}
export default Details;
