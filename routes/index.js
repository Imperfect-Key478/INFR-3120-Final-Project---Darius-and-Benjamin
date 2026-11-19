
var express = require('express');
var router = express.Router();

// Home page
router.get('/', function(req, res, next) {
    res.render('index', { title: 'DB Financial Services' });
});

// About Us
router.get('/aboutus', function(req, res, next) {
    res.render('aboutus', { title: 'About Us' });
});

// Contact
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Us' });
});

// New Account page
router.get('/newaccount', function(req, res, next) {
    res.render('newaccount', { title: 'New Account' });
});

// Create Account
router.post('/newaccount', async function(req, res, next) {
    try {
        const account = {
            accountName: req.body.accountName,
            accountType: req.body.accountType,
            balance: Number(req.body.balance),
            createdAt: new Date()
        };

        await req.db.collection('accounts').insertOne(account);

        res.redirect('/viewaccount');
    } catch (error) {
        next(error);
    }
});

// View Accounts
router.get('/viewaccount', async function(req, res, next) {
    try {
        const accounts = await req.db.collection('accounts')
            .find({})
            .toArray();

        res.render('viewaccount', {
            title: 'View Accounts',
            accounts: accounts
        });
    } catch (error) {
        next(error);
    }
});

module.exports = router;
