/**
 * Created by cshlovjah on 16.05.16.
 */
var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var ResourceModel = require('../models/resources').ResourceModel;
var ResourceChildrenModel = require('../models/resources').ResourceChildrenModel;
var log = require('../libs/log')(module);
var router = express.Router();

router.get('/resources', function (req, res) {

    switch (req.user.role) {
        case 'administrator':
            ResourceModel.find(function (err, resource) {
                if (!err) {
                    console.log(resource);
                    return res.send(resource);
                } else {
                    res.statusCode = 500;
                    log.error('Internal error(%d): %s', res.statusCode, err.message);
                    return res.send({error: 'Server error'});
                }
            });
            break;
        case 'manager':
            console.log("Менеджер");
            return ResourceModel.find(function (err, resource) {
                if (!err) {
                    return res.send(resource);
                } else {
                    res.statusCode = 500;
                    log.error('Internal error(%d): %s', res.statusCode, err.message);
                    return res.send({error: 'Server error'});
                }
            });
            break;
        case 'mechanic':
            console.log('Механик');
            res.redirect('/mechanic');
            break;
    }
});