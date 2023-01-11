const router = require('express').Router();
//Import routers for the application
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


//Export router
module.exports = router;