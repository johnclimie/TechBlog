const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const date = new Date();
        const dateString = date.toLocaleDateString('en-us', { year:'numeric', month: 'long', day:'numeric' })

        const dbUserData = await Post.create({
            username: req.session.username,
            title: req.body.title,
            postcontent: req.body.postcontent,
            date: dateString,
            user_id: req.session.user_id
        });

        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;