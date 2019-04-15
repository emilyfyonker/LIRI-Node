
console.log("inside liri.js");
require("dotenv").config();

var keys = require("./keys.js");
var spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

// Basic Node application for requesting data from the OMDB website via axios
// Here we incorporate the "axios" npm package
var axios = require("axios");


// Grab the movieName which will always be the third node argument.

//make it so that specific commands correlate to specific API calls
if (process.argv[2] == "movie-this") {

  var movieName = process.argv[3];

  // We then run the request with axios module on a URL with a JSON
  axios.get("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy").then(
    function (response) {
    }
  );
  // Then run a request with axios to the OMDB API with the movie specified
  var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy&r=JSON";

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);

  axios.get(queryUrl).then(
    function (response) {
      console.log("Title: " + response.data.Title);
      console.log("Release Year: " + response.data.Year);
      console.log("Plot: " + response.data.Plot);
      console.log("Actors: " + response.data.Actors);
      console.log("Rated: " + response.data.Rated);
      console.log("This movie was produced in: " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("IMDB Rating: " + response.data.imdbRating);
      console.log("RT Rating: " + response.data.Ratings[1].Value);
      //console.log(JSON.stringify(response.data, null, 2));

    }
  );

  // If no movie is provided, LIRI defaults to 'Mr. Nobody'
  var search;
  if (movieName === '') {
    search = 'Mr. Nobody';
  } else {
    search = movieName;
  }
}

if (process.argv[2] == "concert-this") {


  var artistName = process.argv[3];
  var search;

  // Then run a request with Bands in Town to the  API with the artist specified
  var queryUrl = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=codingbootcamp"

  axios.get(queryUrl).then(
    function (response) {
      //console.log(response)
      console.log("Venue: " + data[i].venue.name);
      console.log("Venue Location: " + + data[i].venue.city + ", " + data[i].venue.country);
     
  ;

  // This line is just to help us debug against the actual URL.
  console.log(queryUrl);
  if (artistName === '') {
    search = artistName
  }
  // Need to create a function that executes call and extracts Name of the venue, Venue of location and Date of the Event 
  //(use moment to format this as "MM/DD/YYYY")

}





if (process.argv[2] == "spotify-this-song") {
  var spotify = require('spotify');
  var spotify = new Spotify(keys.spotify);
  var spotify = require('node-spotify-api');


  spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
      if ( err ) {
          console.log('Error occurred: ' + err);
          return;
      }
      else{
        console.log(response);
      }
  });


//var cmdArgs = process.argv;


//
//var liriArg = '';
//for (var i = 3; i < cmdArgs.length; i++) {
   // liriArg += cmdArgs[i] + '';
//}

//function that take in command line argument, "spotify-this-song" and returns the following info:
//The song's name//
//A preview link of the song from Spotify
//The album that the song is frominformation about the song.

//fs.readFile('/etc/passwd', 'utf8', callback);

// If no song is entered default to "The Sign" by Ace of Base. Use else statement to pull data on any other song.
var search;
if (songName === '') {
  search = 'The Sign';
} else {
  search = songName;
}


//function spotifySong(spotify) { type: 'spotify-this-song', query: 'My search query', limit: 20 }, callback;


//var spotify = new Spotify({
    //id: "0e5f37f963fa4c3a8c1656250b536979",
    //secret: "9df3cf24f8d7453b906e5c1c71fb2c9d"
//});

//spotify.search({ type: 'track', query: 'All the Small Things' }, function (err, data) {
    //if (err) {
        //return console.log('Error occurred: ' + err);
    //}

    //console.log(data);
//});
}


