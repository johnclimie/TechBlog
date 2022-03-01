const router = require('express').Router();
const { Post } = require('../../models'); 
// Creates put request in order for a user to update post
router.put('/:id', async (req, res) => {
    try {
        const dbPostData = await Post.update({
            title: req.body.title,
            postcontent: req.body.postcontent,
        }, {
            where: {
                id: req.params.id
            }
        })

        res.status(200).json(dbPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;