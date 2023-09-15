import req from "express/lib/request.js";
import TweetService from "../services/tweet-service.js";
// creating TweetService object
const tweetService = new TweetService();
export const createTweet = async(req, res) => {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            sucess: true,
            message: 'Successfully created a new tweet',
            data: response,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            message: 'Something went wrong during creating a new tweet',
            data: {},
            err: error
        });
    }
}