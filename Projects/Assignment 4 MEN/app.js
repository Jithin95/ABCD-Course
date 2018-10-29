const express = require('express')
const path = require('path')
const chalk = require("chalk");
const postData = require(path.join(__dirname,'src/model/article_model'));
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
const accountRouter = require(path.join(__dirname,'src/routes/account'));
const userRouter = require(path.join(__dirname,'src/routes/user'));
require('dotenv').config();
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json()) // Body parser use JSON data
    .use(expressValidator())
    .use(expressSession({secret: "Secret Key", saveUninitialized: false, resave: false}))
    .use('/account', accountRouter)
    .use('/user', userRouter)
    .set('views', path.join(__dirname, 'src/views'))
    .set('view engine', 'ejs')
    .get('/', (req, res) => {
        postData.find((err, post) => {
            console.log("Post Data " + post.length);
        if (req.session.loginuserdata) {
            res.render('loggedindex', {
                loggeduser: req.session.loginuserdata,
                post: post
            });
        } else { //error invalid detail
            res.render('index', {post: post});
        }
    });})
    .get('/post/:postid', (req, res) => {
    postData.findOne({
        _id: req.params.postid
    }, (err, post) => {
        if (post) {
            if (req.session.loginuserdata) {
                res.render('postdetaillogged', {loggeduser: req.session.loginuserdata, post: post});
            } else {
                res.render('postdetail', {post: post});
            }
        }
    });
})

    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
