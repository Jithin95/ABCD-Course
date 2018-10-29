const express = require('express');
const userRouter = express.Router();
const userData = require('../model/user_model');
const postData = require('../model/article_model');
var bodyParser = require('body-parser');
var utils = require('./utils');
const {check, validationResult} = require('express-validator/check');

userRouter.use(bodyParser.urlencoded({extended: false}));
userRouter.use(bodyParser.json()); // Body parser use JSON data

userRouter.get('/mypost', (req, res)=>{
    if (req.session.loginuserdata) {
        console.log("Log id "+req.session.loginuserdata._id);
        postData.find({user : req.session.loginuserdata}, (err, post) => {
            res.render('mypost', {loggeduser: req.session.loginuserdata, post: post});

        });
    } else {
        res.redirect('/');
    }

});

userRouter.get("/deletepost/:postid", (req, res) => {
    if (req.session.loginuserdata) {
        postData.remove({ _id: req.params.postid }, (err, succ) =>{
            if (!err) {
                console.log("Delete log" + err+ succ);
                res.redirect('/user/mypost');
            }

        });
    } else {
        res.redirect('/account/login');
    }

});

userRouter.get("/editpost/:postid", (req, res) => {
    if (req.session.loginuserdata) {
        postData.findOne({
            _id: req.params.postid
        }, (err, post) => {
            if (post) {
                console.log("Edit GET Post"+post);
                res.render("editpost", {
                    post: post,
                    loggeduser: req.session.loginuserdata,
                    validationCheck: req.session.editvalidationCheck,
                    validationError: req.session.editvalidationErrors
                });
            }
        });
        req.session.editvalidationCheck = true;
        req.session.editvalidationErrors = null;
    } else {
        res.redirect('/account/login');
    }

});



userRouter.post("/editpost/:postid", (req, res) => {
    console.log("Success Edit");
    var postid = req.params.postid;
    var title = req.body.title;
    var content = req.body.content;
    var discontent = truncateString(req.body.content);
    var modifiedDate = utils.dateFormat(new Date(), "dddd h:mmtt d MMM yyyy");


    var userId = req.session.loginuserdata;

    req.checkBody('title', 'Title is required').notEmpty();
    req.checkBody('content', 'Content is required').notEmpty();
    var errors = req.validationErrors();
    console.log("Errors in form " + errors);
    if (errors) {
        req.session.validationCheck = false;
        req.session.validationErrors = errors;

        res.redirect('/user/editpost/'+postid);
    } else {

        req.session.validationCheck = true;
        req.session.validationErrors = null;
        console.log("Saving file to db");
        var item = {
            user: userId,
            title: title,
            content: content,
            discontent: discontent,
            modifieddate: modifiedDate
        };
        // var post = new postData(item);
        // post.isNew = false;
        // post.save();
        postData.findOneAndUpdate({_id: postid}, item, (err)=> {
            console.log("Updated"+err);
            res.redirect('/user/mypost');
        });



    }

});

userRouter.get("/addpost", (req, res) => {

    if (req.session.loginuserdata) {
        res.render("addpost_page", {
            loggeduser: req.session.loginuserdata,
            validationCheck: req.session.validationCheck,
            validationError: req.session.validationErrors
        });
        req.session.validationCheck = true;
        req.session.validationErrors = null;
    } else {
        res.redirect('../account/login');
    }

});

function truncateString(longText) {
    var li = longText.split(" ");
    if (li.length > 150) {
        return li.splice(0, 120)+"...";
    } else {
        return longText;
    }
}

userRouter.post("/addpost", (req, res) => {
    var title = req.body.title;
    var content = req.body.content;
    var discontent = truncateString(req.body.content);
    var modifiedDate = utils.dateFormat(new Date(), "dddd h:mmtt d MMM yyyy");

    var userId = req.session.loginuserdata;

    req.checkBody('title', 'Title is required').notEmpty();
    req.checkBody('content', 'Content is required').notEmpty();
    var errors = req.validationErrors();
    console.log("Errors in form " + errors);
    if (errors) {
        req.session.validationCheck = false;
        req.session.validationErrors = errors;

        res.redirect('/user/addpost');
    } else {

        req.session.validationCheck = true;
        req.session.validationErrors = null;
        console.log("Saving file to db");
        var item = {
            user: userId,
            title: title,
            content: content,
            discontent: discontent,
            modifieddate: modifiedDate
        };
        var post = new postData(item);
        post.save();
        res.redirect('/');
    }

});

module.exports = userRouter;
