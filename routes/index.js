var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var ResourceModel = require('../models/resources').ResourceModel;
var ResourceChildrenModel = require('../models/resources').ResourceChildrenModel;
var log = require('../libs/log')(module);
var router = express.Router();


router.get('/', function (req, res) {
    res.render('index', {user: req.user, title: "Добро пожаловать в автосервис"});
});

router.get('/administrator', function (req, res) {
    console.log("Администратор");
    res.render('index', {user: req.user, title: "Панель управления администратора"});
});


router.get('/manager', function (req, res) {
    console.log("Менеджер");
    res.render('index', {user: req.user, title: "Панель управления менеджера"});
});

router.get('/mechanic', function (req, res) {
    console.log("Механик");
    res.render('index', {user: req.user, title: "Панель управления механика"});
});


router.get('/login', function (req, res) {
    res.render('login', {user: req.user, title: "Авторизуйтесь"});
});

router.post('/login', passport.authenticate('local'), function (req, res) {
    console.log("Ваш пользователь: " + req.user);

    var role;
    if (req.user) {
        req.session.save(function (err) {
            if (err) {
            }
            return;
        });
        role = req.user.role;
    }
    switch (req.user.role) {
        case 'administrator':
            res.redirect('/administrator');
            break;
        case 'manager':
            console.log("Менеджер");
            res.redirect('/manager');
            break;
        case 'mechanic':
            console.log('Механик');
            res.redirect('/mechanic');
            break;
    }
    res.redirect('/');
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

//Добавление
//Ресурсы Бокс
router.post('/resource', function (req, res) {
    var resource = new ResourceModel({
        id: req.body.id,
        title: req.body.title,
        eventColor: req.body.eventColor
    });
    console.log(resource);

    resource.save(function (err) {
        if (!err) {
            log.info("created");
            return res.send({status: 'OK', resource: resource});
        } else {
            console.log(err);
            if (err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({error: 'Validation error'});
            } else {
                res.statusCode = 500;
                res.send({error: 'Server error'});
            }
            log.error('Internal error(%d): %s', res.statusCode, err.message);
        }
    });
});

//Ресурсы посты
router.post('/resourceChildren', function (req, res) {
    var resourceChildren = new ResourceChildrenModel({
        id: req.body.id,
        title: req.body.title
    });
    console.log(resourceChildren);

    resourceChildren.save(function (err) {
        if (!err) {
            log.info("created");
            return res.send({status: 'OK', resource: resourceChildren});
        } else {
            console.log(err);
            if (err.name == 'ValidationError') {
                res.statusCode = 400;
                res.send({error: 'Validation error'});
            } else {
                res.statusCode = 500;
                res.send({error: 'Server error'});
            }
            log.error('Internal error(%d): %s', res.statusCode, err.message);
        }
    });
});


module.exports = router;
