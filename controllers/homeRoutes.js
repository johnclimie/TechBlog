const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('homepage');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/login', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/dashboard', async (req, res) => {
    try {
        res.render('dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/create', async (req, res) => {
    try {
        res.render('create');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/viewpost', async (req, res) => {
    try {
        res.render('viewpost');
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;