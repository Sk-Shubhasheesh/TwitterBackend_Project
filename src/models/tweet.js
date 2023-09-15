import mongoose from "mongoose";
// creating schema
const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
        max: [250, "Tweet canot be more than 250characters"],
    },

}, {timestamps: true});


// creating model
const Tweet = mongoose.model('Tweet', tweetSchema);
export default Tweet;
