const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const date = new Date();
        const dateString = date.toLocaleDateString('en-us', { year:'numeric', month: 'long', day:'numeric' });
        console.log(dateString);

        const dbCommentData = await Comment.create({
            username: req.session.username,
            commentcontent: req.body.commentcontent,
            date: dateString,
            post_id: req.session.currentview
        });

        res.status(200).json(dbCommentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;