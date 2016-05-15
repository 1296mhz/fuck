/**
 * Created by cshlovjah on 16.05.16.
 */
var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var log = require('../libs/log')(module);

var router = express.Router();

router.get('/', function (req, res) {
    if(!req.user){
        res.render('register', {});
    }
    else {
        res.redirect('/');
    }
});

router.post('/', function (req, res) {
    Account.register(new Account({
        username: req.body.username,
        role: req.body.role,
        boxid: req.body.boxid
    }), req.body.password, function (err, account) {
        if (err) {
            return res.render('register', {account: account});
        }
        passport.authenticate('local')(req, res, function () {
            res.redirect('/');
        });
    });
});

module.exports = router;