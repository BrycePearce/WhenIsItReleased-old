// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var posterQuery = 'http://api.themoviedb.org/3/search/movie?query=';
    var dateQuery = 'https://api.themoviedb.org/3/movie/';

    var key = '&api_key=f016113c794da0ca4fc69f2cbeaca136';
    var key2 = 'f016113c794da0ca4fc69f2cbeaca136';


    document.getElementById("btn").addEventListener("click", function () {
        var input = document.getElementById('movie').value;

        fetch(posterQuery + input + key)
            .then(function (response) {
                response.json().then(function (json) {
                    //console.log(json);

                    json.results.forEach(function (result) {
                        //create li element, append results as text and output to our UL
                        var li = document.createElement("LI");
                        li.onclick = showClick.bind(this, result); //(attaches onClick to each li, so we can get the whole object including ID)
                        var textnode = document.createTextNode(result.original_title);
                        li.appendChild(textnode);
                        document.getElementById("possibleResults").appendChild(li);
                    }, this);
                    document.getElementById("poster").src = "https://image.tmdb.org/t/p/w500" + json.results[0].poster_path;
                });
            });
        //write clicked text to the output
        document.getElementById("possibleResults").addEventListener("click", function (e) {
            // e is the mouseEvent, e.target is the user selected li, e.target.innerText is the innertext of the li
            document.getElementById("tempOut").innerText = e.target.innerText;
        });
    });

    function showClick(result) {
        movie.value = result.original_title;

        //dvd query
        fetch(dateQuery + result.id + "/release_dates?api_key=" + key2)
            .then(function (response) {
                response.json().then(function (json) {
                    document.getElementById("date").innerText = json.results[0].release_dates[0].release_date;
                });
            });
    };
});