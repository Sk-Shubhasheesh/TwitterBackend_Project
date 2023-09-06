const express = require('express');
const connect = require('./config/database.js');
const app = express();
// const Tweet = require('./models/tweet.js')
const Comment = require('./models/comment.js')
const TweetRepository = require('./repository/tweet-repository.js')
app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log("Mongo db connect");
   

});
