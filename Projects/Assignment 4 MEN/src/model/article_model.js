const mongoose = require("mongoose");
const chalk = require("chalk");
require('dotenv').config();

mongoose.connect(process.env.MONGO_DB, (err)=> {
    if (err) {
        console.log(chalk.red(`Error in connecting Database  ${err}`));
    } else {
        console.log(chalk.green(`Successfully connected`));
    }
});


const Schema = mongoose.Schema;
var articleSchema = new Schema({
    user : Object,
    title : String,
    content : String,
    discontent : String,
    modifieddate : String,
});

var postData = mongoose.model("post_data", articleSchema);
module.exports = postData;
