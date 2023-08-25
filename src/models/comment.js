const mongoose = require('mongoose');
// creating schema
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    userEmail: {
        type: String
    },
}, {timestamps: true});

// creating model
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
