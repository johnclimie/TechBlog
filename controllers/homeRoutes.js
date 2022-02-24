const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/helpers');

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();

        const postDataArr = postData.map((post) => post.get({ plain: true }))

        res.render('homepage', {loggedIn: req.session.loggedIn, postDataArr});
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
        const postData = await Post.findAll();

        const postDataArr = postData.map((post) => post.get({ plain: true }))

        res.render('dashboard', {loggedIn: req.session.loggedIn, postDataArr});
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

router.get('/viewpost/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id);

        const post = dbPostData.get({ plain: true });

        res.render('viewpost', {loggedIn: req.session.loggedIn, post});
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