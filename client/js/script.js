// All the code below will be run once the page content finishes loading.
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var posterQuery = 'http://api.themoviedb.org/3/search/movie?query=';
    var dateQuery = 'https://api.themoviedb.org/3/movie/';

    var key = '&api_key=f016113c794da0ca4fc69f2cbeaca136';
    var key2 = 'f016113c794da0ca4fc69f2cbeaca136';

    document.getElementById("btn").addEventListener("click", function () {
        var input = $('#movie').val();

        fetch(posterQuery + input + key)
            .then(function (response) {
                response.json().then(function (json) {
                    console.log(json);

                    json.results.forEach(function (result) {
                        //console.log(result.original_title);
                        //create li element, append results as text and output to our UL
                        var node = document.createElement("LI");
                        var textnode = document.createTextNode(result.original_title);
                        node.appendChild(textnode);
                        document.getElementById("possibleResults").appendChild(node);
                    }, this);
                    document.getElementById("poster").src = "https://image.tmdb.org/t/p/w500" + json.results[0].poster_path;
                });
            });
            //write clicked text to the output
        document.getElementById("possibleResults").addEventListener("click", function (e) {
            // e is the mouseEvent, e.target is the user selected li, e.target.innerText is the innertext of the li
            document.getElementById("tempOut").innerText = e.target.innerText;
            console.log(e);
            console.log(e.target);
        });
        
        /*fetch(dateQuery + input + key2)
            .then(function (response) {
                response.json().then(function (json) {
                    console.log(json);
                    //document.getElementById("date").innerText = dateQuery + input + '/images?api_key=' + key + '&language=en-US';
                });
            });*/
    });
});