/**
 * Created by Jackson on 8/4/16.
 */
$(document).ready(function(){
    var apiKey = '?api_key=fec8b5ab27b292a68294261bb21b04a5';
    var baseUrl = 'http://api.themoviedb.org/3';

    $.getJSON(baseUrl + '/movie/now_playing' + apiKey, function(data){
        console.log(data);
        var npHTML = '';

        for(var i = 0; i < data.results.length; i++){
            npHTML += '<div class="poster">';
                npHTML += '<img src="http://image.tmdb.org/t/p/w300/' + data.results[i].poster_path + '">';
                npHTML += '<p class="movie-title">' + data.results[i].title + '</p>';
            npHTML += '</div>';

        }

        $('.poster-grid').html(npHTML);
    });

    $('.btn-submit').click(function(){
        event.preventDefault();

        $.getJSON(baseUrl + '/search/movie?query=' + $('#movie').val() + '&api_key=fec8b5ab27b292a68294261bb21b04a5', function(data){
            $('.poster-grid').html('');

            console.log(data);
            var npHTML = '';

            for(var i = 0; i < data.results.length; i++){
                npHTML += '<div class="poster">';
                npHTML += '<img src="http://image.tmdb.org/t/p/w300/' + data.results[i].poster_path + '">';
                npHTML += '<p class="movie-title">' + data.results[i].title + '</p>';
                npHTML += '</div>';

            }

            $('.poster-grid').html(npHTML);
        });
    })
});