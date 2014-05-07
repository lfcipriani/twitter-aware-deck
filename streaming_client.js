"use strict";
var path = require("path");
var fs = require("fs");
var Twit = require('twit');  

var oauth = JSON.parse(fs.readFileSync("./config/twitter_credentials.js", "UTF8"));
var keywords = ['twitter'];

var client = new Twit(oauth);

var stream = client.stream('statuses/filter', { track: keywords })

stream.on('tweet', function(tweet) {
    console.log(tweet.text);
});


