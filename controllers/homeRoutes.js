const router = require('express').Router();
const { Post, Comment } = require('../models');
const withAuth = require('../utils/helpers');

// Loads all posts for homepage
router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll();

        const postDataArr = postData.map((post) => post.get({ plain: true }))

        res.render('homepage', {loggedIn: req.session.loggedIn, postDataArr});
    } catch (err) {
        res.status(500).json(err);
    }
})

// Renders login handlebar
router.get('/login', async (req, res) => {
    try {
        res.render('login', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

// Renders dashboard handlebar and only loads posts for signed in user
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            }
        });

        const postDataArr = postData.map((post) => post.get({ plain: true }))

        res.render('dashboard', {loggedIn: req.session.loggedIn, postDataArr});
    } catch (err) {
        res.status(500).json(err);
    }
})

// Renders create handlebar to create a new post
router.get('/create', withAuth, async (req, res) => {
    try {
        res.render('create', {loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json(err);
    }
})

// Renders viewpost handlebar and Loads all comments for that post
router.get('/viewpost/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id);

        req.session.currentview = req.params.id;

        const post = dbPostData.get({ plain: true });

        let editable;

        if (req.session.user_id == post.user_id) {
            editable = true;
        } else {
            editable = false;
        }

        const dbCommentData = await Comment.findAll({
            where: {
                post_id: req.params.id,
            }
        });

        const comments = dbCommentData.map((comment) => comment.get({ plain: true }))


        res.render('viewpost', {loggedIn: req.session.loggedIn, post, editable, comments});
    } catch (err) {
        res.status(500).json(err);
    }
})

// Renders edit handlebar in order to edit selected post
router.get('/edit/:id', withAuth, async (req, res) => {
    try{
        const dbPostData = await Post.findByPk(req.params.id);

        const post = dbPostData.get({ plain: true });

        res.render('editpost', {loggedIn: req.session.loggedIn, post});
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;