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
    // checking thing after creating model
    // const tweet = await Tweet.create({
    //     content: 'Third tweet',
    //     // userEmail: 'a@b.com'
    // });

    // const tweets = await Tweet.find({userEmail:'a@b.com'});

    // const tweets = await Tweet.findById('64e86253987bbfa43ee260af');
    // tweets.userEmail = 'b@c.com';
    // await tweets.save();
    //console.log(tweets);
    
    // checking things after creating repository
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.get('64e86253987bbfa43ee260af'); // getting data by id
    // const tweet = await tweetRepo.update('64e86253987bbfa43ee260af', {
    //     content: "my tweet is working"
    // }); // update

    // const tweet = await tweetRepo.create({content: 'my tweet'});
    // console.log(tweet);
    // tweet.comments.push({content: "first comment"});
    // tweet.save();
    // console.log(tweet);

    // const tweet = await tweetRepo.create({content: "Tweet with comment schema"});
    // console.log(tweet);
    // const comment = await Comment.create({content: 'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);

    // const tweet = await tweetRepo.getWithComments('64e8bf1fd236ddde812ad073');
    // const tweet = await tweetRepo.getAll(0, 4);
    // console.log(tweet[0].contentWithEmail); // virtual concept
    
    const tweet = await tweetRepo.create({content: 'With hooks now' });
    console.log(tweet);

});
