import express from 'express';
import{connect} from './config/database.js'
const app = express();
import service from './services/tweet-service.js'
import TweetService from './services/tweet-service.js';
app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log("Mongo db connect");
    let repo = new TweetService();
    await repo.create({
        content:'Done with #refactor ?'
    })

});
