var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'DB Financial Services' });
});

router.get('/contact', function(req, res, next) {
    res.render('pages/contact', { title: 'Contact Us' });
});

module.exports = router;
