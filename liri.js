import { defaultCoreCipherList } from "constants";
import { request } from "http";

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
function userCommand(userInput, userQuery){

}
function concertThis() {
  //use request as the query
  request("https://rest.bandsintown.com/artists/" + userQuery + "/events?app_id=codingbootcamp")
  if (!error && response.statusCode === 200) {

    //capture data and use JSON to format
    let userBand = JSON.parse(body);
    if (userBand.length > 0){
      for (i = 0; i>1; i++){
        console.log(`"Artist: " + ${userBand[i].lineup[0]}`);
        console.log(`"Venue City: " + ${userBand.venue.name}`)
      }
    }
    
  }
};



function spotifyThisSong() {

}

function movieThis(){

}

function doWhatItSays(){

}




