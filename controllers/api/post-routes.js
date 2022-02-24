const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const date = new Date();
        const dateString = date.toLocaleDateString('en-us', { year:'numeric', month: 'long', day:'numeric' })

        const dbUserData = await Post.create({
            username: req.session.username,
            postcontent: req.body.postcontent,
            date: dateString
        });

        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;