import { LikeRepository, TweetRepository} from '../repository/index.js';
import Tweet from '../models/tweet.js';
class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) { // /api/v1/likes/toggle?id=modelid&type=Tweet
        console.log("model", modelId, modelType, userId);
        if(modelType == 'Tweet') {
            var likeable = await this.tweetRepository.find(modelId); // these helps to get tweet
            
        } else if(modelType == 'Comment') {
            // TODO
        } else {
            throw new Error('unknown model type');
        }
        //checking the like is done or not by the current user
        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
       // removed the like if like is alredy done
        if(exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.deleteOne();
            var isAdded = false;

        } else { // added the like if like is not added
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();

            var isAdded = true;
        }
        return isAdded;
    }   
}

export default LikeService;