const axios = require("axios");
const moment = require("moment");

//require .env file
require("dotenv").config();

//Require file systems
const fs = require("fs");

////link key page
var keys = require("./keys.js");

//initialize spotify
var Spotify = require("node-spotify-api:");
var spotify = new Spotify(keys.spotify);

//OMDB AND BANDS IN TOWN APIs
let omdb = (keys.omdb);
let bandsintown = (keys.bandsintown);


//take user command and input
let userInput = process.argv[2];
let userQuery = process.argv.slice(3).join(" ");

//APP LOGIC
function userCommand(userInput, userQuery) {
  //make decision based on command
  switch (userInput) {
    case "concert-this":
    concertThis();
      break;
    case "spotify-this-song":
      spotifyThis();
        break;
    case "movie-this":
      movieThis();
        break;
    case "do-what-it-says":
    doWhatItSays(userQuery);

  }

}


// function concertThis() {
//   axios.get("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp")
//     .then(function (res) {
//       //console.log(res.data)
//       console.log("Venue Name: " + res.data[0].venue.name);
//       console.log("Venue City: " + res.data[0].venue.city);
//       console.log("Date: " + moment(res.data[0].datetime).format('MMMM Do YYYY'))
//     })
// };


// function spotifyThis() {
//   if (userQuery === undefined || null) {
//     userQuery = "The Sign Ace of Base";
// }
// //spotify search and query format
// spotify.search({ type: 'track', query: userQuery, limit: 1 }, function(error, data) {
// if (error) {
//   return console.log('Error occured: ' + error);
// }
// // //collect selected data in array
// let spotifyArr = data.tracks.items;

// for (i = 0; i< spotifyArr.length; i++) {
//    console.log(`\nArtist: ${userQuery.tracks.items[i].album.artists[0].name}`);
//    //console.log(response)
// };

// });
// }


function movieThis(){
  if (userQuery === undefined || null) {
    userQuery = "Mr.Nobody";
}
var queryUrl = "http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy";
  // JSON.parse for legibility
  axios.get(queryUrl).then(
    function (response) {
      // console.log("Title: " + response.data.Title);
      // console.log("Release Year: " + response.data.Year);
      // console.log("Plot: " + response.data.Plot);
      // console.log("Actors: " + response.data.Actors);
      // console.log("Rated: " + response.data.Rated);
      // console.log("This movie was produced in: " + response.data.Country);
      // console.log("Language: " + response.data.Language);
      // console.log("IMDB Rating: " + response.data.imdbRating);
      // console.log("RT Rating: " + response.data.Ratings[1].Value);
      //console.log(JSON.stringify(response.data, null, 2));
  });
}
  


function spotifyThisSong() {

}

function movieThis(){

}

function doWhatItSays(){

}

userCommand(userInput, userQuery);



