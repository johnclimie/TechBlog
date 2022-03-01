const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
// Creates routes for files
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;