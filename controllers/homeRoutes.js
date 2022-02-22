const router = require('express').Router();

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

router.get('/create', async (req, res) => {
    try {
        res.render('create', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/viewpost', async (req, res) => {
    try {
        res.render('viewpost', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/edit', async (req, res) => {
    try{
        res.render('editpost', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;