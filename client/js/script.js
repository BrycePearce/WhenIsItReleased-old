// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var path = 'http://api.themoviedb.org/3/search/movie?query=';
    var key = '&api_key=f016113c794da0ca4fc69f2cbeaca136';
    var movieName;

    document.getElementById("btn").addEventListener("click", function () {
        var input = $('#movie').val();

        fetch(path + input + key)
            .then(function (response) {
                response.json().then(function (json) {
                    console.log(json);
                    console.log(json.results[0].poster_path);
                    document.getElementById("poster").src = "https://image.tmdb.org/t/p/w500" + json.results[0].poster_path;
                });
            });
    });
});