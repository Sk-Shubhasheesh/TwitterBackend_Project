import mongoose from "mongoose";
/* We create a like model. Like will be done on the comment or like will be done on the tweet. So we create
a extandable model which is used for both purpose.
*/
const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        require: true,
        enum: ['Tweet', 'Comment']
    },
    likeable: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {timestamps:true});

const Like = mongoose.model('Like', likeSchema);
export default Like;