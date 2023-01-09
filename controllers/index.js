const router = require('express').Router();

//Import modular routers for this application
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
//Export router
module.exports = router;