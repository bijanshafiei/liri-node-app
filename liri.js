var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require('request');
var fs = require('fs');

var  choices = {

	mytweets: function (){
		console.log("my tweets");
		var client = new Twitter(keys.twitterKeys);
		var params = {screen_name: 'bshafieitest'};
		client.get('statuses/user_timeline', params, function(error, tweets, response) {
  			if (!error) {
				for (var i=0; i<tweets.length; i++){
					console.log('-----------------');
					console.log(tweets[i].created_at);
					console.log(tweets[i].text);
					console.log('-----------------');
				}
 			}
		});
	},

	spotifyThisSong: function (){
		
	},

	movieThis: function (){
		
	},

	doWhatItSays: function (){
		
	},
	
}
//Taking user input
switch (process.argv[2]) {
		case "my-tweets":
			choices.mytweets();
			break;
		
	}