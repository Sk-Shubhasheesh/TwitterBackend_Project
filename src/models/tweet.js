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

// concept of virtuals in mongodb
tweetSchema.virtual('contentWithEmail').get(function process() {
    return `${this.content} \nCreated by: ${this.userEmail}`;
})

// concept of hooks in mogodb nothing but like trigger
tweetSchema.pre('save', function(next){
    console.log('Inside a hook');
    this.content = this.content + '...'; // this line update the tweet
    next();
})

// creating model
const Tweet = mongoose.model('Tweet', tweetSchema);
module.exports = Tweet;
