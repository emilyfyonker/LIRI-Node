const axios = require("axios");
const moment = require("moment");

//require .env file
require("dotenv").config();

//Require file systems
const fs = require("fs");

////link key page
var keys = require("./keys.js");

//initialize spotify
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

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
      spotifyThis(userQuery);
      break;
    case "movie-this":
      movieThis();
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
  }
}


function concertThis() {
  axios
    .get("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp")
    .then(function (res) {

      //console.log(res.data)
      console.log("Venue Name: " + res.data[0].venue.name);
      console.log("Venue City: " + res.data[0].venue.city);
      console.log("Date: " + moment(res.data[0].datetime).format('MM/DD/YYYY'))


    })
};


function spotifyThis(userQuery) {
  var spotify = new Spotify(keys.spotify);
  console.log('userQuery', userQuery)
  if (userQuery === '') {
    userQuery = "ace of base the sign"
  }
  spotify.search({ type: 'track', query: userQuery }, function (err, data) {
    if (err) {
      console.log()
      console.log('Error occurred: ' + err);
    }
    //console.log(data)
    console.log(data.tracks.items[0].artists[0].name);
    console.log(data.tracks.items[0].name);
    console.log(data.tracks.items[0].artists[0].external_urls);
    console.log(data.tracks.items[0].album.name);
    //   });

  })
}
//   var spotify = new Spotify(keys.spotify);

// //     else {

//   spotify.search({ type: 'track', query: userQuery }, function (err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//     console.log(data.tracks.items[0].artists[0].name);
//     console.log(data.tracks.items[0].name);
//     console.log(data.tracks.items[0].artists[0].external_urls);
//     console.log(data.tracks.items[0].album.name);


//   })};




function movieThis() {
  if (userQuery === '') {
    userQuery = 'Mr. Nobody'
          }
  axios.get("http://www.omdbapi.com/?t=" + userQuery + "&y=&plot=short&apikey=trilogy").then(
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
    })
}

// function spotifyThis() {

//   var spotify = new Spotify(keys.spotify);
//   spotify.search({ type: 'track', query: userQuery }, function (err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
//     console.log(data.tracks.items[0].artists[0].name);
//     console.log(data.tracks.items[0].name);
//     console.log(data.tracks.items[0].artists[0].external_urls);
//     console.log(data.tracks.items[0].album.name);
//   });
// }


function doWhatItSays(){
  fs.readFile("./random.txt", 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    };
    console.log(data);
    var dataArr = data.split(",")
    console.log(dataArr[1]);
    var randomTxtSong = dataArr[1];
    spotifyThis(randomTxtSong);
  }
  
  )
}

userCommand(userInput, userQuery);



