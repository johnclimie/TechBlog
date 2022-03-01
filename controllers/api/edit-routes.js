const router = require('express').Router();
const { Post } = require('../../models'); 

router.put('/', async (req, res) => {
    try {
        const date = new Date();
        const dateString = date.toLocaleDateString('en-us', { year:'numeric', month: 'long', day:'numeric' });
        console.log(dateString);

        const dbPostData = await Post.update({
            title: req.body.title,
            postcontent: req.body.postcontent
        });

        await Post.save();

        res.status(200).json(dbPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;