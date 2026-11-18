var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'DB Financial Services' });
});

router.get('/aboutus', function(req, res, next) {
    res.render('aboutus', { title: 'About Us' });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
});

router.get('/newaccount', function(req, res, next) {
    res.render('newaccount', { title: 'New Account' });
});

router.get('/viewaccount', function(req, res, next) {
    res.render('viewaccount', { title: 'View Accounts' });
});

module.exports = router;