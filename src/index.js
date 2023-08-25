const express = require('express');
const connect = require('./config/database.js');
const app = express();

app.listen(3000, async () => {
    console.log("server started");
    await connect();
    console.log("Mongo db connect");
});
