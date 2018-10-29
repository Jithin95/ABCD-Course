const express = require('express');
const accountRouter = express.Router();
const userData = require('../model/user_model');
var bodyParser = require('body-parser');
var utils = require('./utils');
const {check, validationResult} = require('express-validator/check');

accountRouter.use(bodyParser.urlencoded({extended: false}));
accountRouter.use(bodyParser.json()); // Body parser use JSON data

accountRouter.get('/logout', (req, res) => {
    req.session.loginuserdata = null;
    res.redirect('/');
});

accountRouter.get("/login", (req, res) => {

    res.render('login_page', {
        usercreated: req.session.regusercreated,
        isfirstlogin: req.session.isfirstlogin,
        loginValidation: req.session.loginvalidation,
        loginErrors: req.session.loginrerrors,
        loginUserValidation: req.session.loginuservalidation
    });

    // req.session.errors = null;
    // req.session.success = false;
    // req.session.regusercreated = false;
});

accountRouter.post('/login', (req, res) => {
    req.session.regusercreated = false;
    req.session.loginvalidation = false;
    req.session.loginrerrors = null;
    req.session.loginuservalidation = false;
    req.session.loginuserdata = null;
    req.session.isfirstlogin = true;



    var username = req.body.username;
    var pass = req.body.pass;

    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('pass', 'Password is required').notEmpty();

    var errors = req.validationErrors();
    if (errors) {
        req.session.loginvalidation = false;
        req.session.loginrerrors = errors;
        res.redirect('/account/login');
    } else {
        req.session.loginvalidation = true;

        userData.findOne({
            username: username,
            password: pass
        }, (err, user) => {
            if (user) {
                req.session.loginuservalidation = true;
                req.session.loginuserdata = user;
                res.redirect('/');
                console.log("User info " + req.session.loginuserdata);
            } else { //error invalid detail
                req.session.loginuservalidation = false;
                req.session.loginuserdata = null;
                res.redirect('/account/login');
            }

        });
    }

});

accountRouter.get("/register", (req, res) => {
    req.session.regusercreated = false;
    res.render('register_page', {
        isfirst: req.session.isfirst,
        haveerror: req.session.regvalidation,
        errorList: req.session.registererrors,
        haveerrorUser: req.session.reguservalidation
    });

    console.log("Is First " + req.session.isfirst);
    console.log("Have Error " + req.session.regvalidation);
    console.log("Error List " + req.session.registererrors);
    console.log("Have Error User " + req.session.reguservalidation);
});

accountRouter.post('/register', (req, res, next) => {
    req.session.registererrors = null;
    req.session.regvalidation = false;
    req.session.reguservalidation = false;
    req.session.isfirst = true;

    var username = req.body.username;
    var pass = req.body.pass;
    var rpass = req.body.rpass;

    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('pass', 'Password is required').notEmpty();
    req.checkBody('rpass', 'Confirm Password is required').notEmpty();
    req.checkBody('rpass', 'Password is invalid').isLength({min: 5});

    req.checkBody('pass', 'Password not match').equals(rpass);
    var errors = req.validationErrors();
    if (errors) {
        req.session.registererrors = errors;
        res.redirect('/account/register');
    } else {
        req.session.regvalidation = true;
        userData.findOne({
            username: username
        }, (err, user) => {
            console.log(user);
            if (user != null && user) {
                res.redirect('/account/register');
            } else {
                req.session.reguservalidation = true;

                var item = {
                    username: username,
                    password: pass
                };
                var user = new userData(item);
                user.save();
                req.session.regusercreated = true;
                res.redirect('/account/login');
            }
        });
    }
});

module.exports = accountRouter;
