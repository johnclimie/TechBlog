const router = require('express').Router();
const withAuth = require('../utils/helpers');

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render('login', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/create', withAuth, async (req, res) => {
    try {
        res.render('create', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/viewpost', withAuth, async (req, res) => {
    try {
        res.render('viewpost', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/edit', withAuth, async (req, res) => {
    try{
        res.render('editpost', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;