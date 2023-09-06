const mongoose = require('mongoose');
// creating schema
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
        max: [250, "Tweet canot be more than 250characters"],
    },
    // multiple hashtag in our tweet
    hashtags: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Hashtag'  
        }
    ]

}, {timestamps: true});


// creating model
const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
