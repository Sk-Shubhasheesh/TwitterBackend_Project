import {TweetRepository, HashtagRepository} from '../repository/index.js'
class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        // extract hashtag from content using regular expression
        const tags = content.match(/#[a-zA-Z0-9_]+/g)
                         .map((tag) => tag.substring(1).toLowerCase()); // this line remove # from hashtag and covert all the tag into lower case
                         
        const tweet = await this.tweetRepository.create(data);
        // finding already present hashtag which gives me to hole hashtag
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        // it give the only title value from the hole hashtag like ['coding', 'node']
        let titleOfPresenttags  = alreadyPresentTags.map(tags=>tags.title);
        // it filter that tag which is not present already in the hashtag
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        // fromating the tag like {title: 'node; tweets: array(tweetid)}
        newTags = newTags.map(tag=>{
           return {title: tag, tweets: [tweet.id]}
           
        });
        // adding the new tag which is not present to the hastag database
        await this.hashtagRepository.bulkCreate(newTags);
        // adding new tweet id which have hastag which is alredy present
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        return tweet;
    }

    async get(tweetId){
        const tweet = await this.tweetRepository.getWithComments(tweetId);
        return tweet;
    }

}

export default TweetService;