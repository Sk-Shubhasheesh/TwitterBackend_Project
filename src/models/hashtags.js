const mongoose = require("mongoose");

const hashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    // multiple tweets id thats belong to hashtag means one hashtag has multiple tweet
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }
    ]

}, {timestamps: true});


// creating models
const Hashtag = mongoose.model("Hashtag", hashtagSchema);
module.exports = Hashtag; 
