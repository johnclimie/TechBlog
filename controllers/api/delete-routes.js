const router = require('express').Router();
const { Post } = require('../../models');
// Creates a delete method in order for a user to delete a post
router.delete('/:id', async (req, res) => {
    try {
        const dbPostData = await Post.destroy({
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