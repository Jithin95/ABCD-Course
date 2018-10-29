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
var userSchema = new Schema({
    username : String,
    password : String,
});

var userData = mongoose.model("user_data", userSchema);
module.exports = userData;
