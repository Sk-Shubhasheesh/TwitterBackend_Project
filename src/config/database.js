const mongoose = require('mongoose');
 const connect = async() => {
    // instead off 0.0.0.0 we write localhost. 0.0. 0.0 is commonly used by firewall software and router software to block (or allow) all IP addresses. 
    await mongoose.connect('mongodb://0.0.0.0:27017/twitter_dev');
}

module.exports = connect;