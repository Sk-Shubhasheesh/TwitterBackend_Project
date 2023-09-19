import mongoose from "mongoose";
// creating schema
const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    onModel: {
        type: String,
        require: true,
        enum: ['Tweet', 'Comment']
    },
    commentable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    }
}, {timestamps: true});

// creating model
const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
