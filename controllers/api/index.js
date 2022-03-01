const router = require('express').Router();

const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');
const editRoutes = require('./edit-routes')
const deleteRoutes = require('./delete-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/edit', editRoutes);
router.use('/delete', deleteRoutes);

module.exports = router;