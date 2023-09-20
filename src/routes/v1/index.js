import express from "express";
import {createTweet, gettweet} from '../../controllers/tweet-controller.js'
import { toggleLike } from '../../controllers/like-controller.js'
import { createComment } from '../../controllers/comment-controller.js'
import { signup } from "../../controllers/auth-controller.js";


const router = express.Router();

router.post('/tweets', createTweet);

router.post('/likes/toggle',toggleLike);

router.post('/comments',createComment);

router.get('/tweets/:id', gettweet);

router.post('/signup', signup);

export default router;