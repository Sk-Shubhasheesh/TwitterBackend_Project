const mongoose = require('mongoose');
// creating schema
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    userEmail: {
        type: String
    },
    comments: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Comment' 
    }
]
}, {timestamps: true});

// creating model
const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;