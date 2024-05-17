const router = require('express').Router();
// this is importing the index.js file from api folder
const apiRoutes = require('./api');
const dashboardRoute = require('./dashboard');

router.use('/', dashboardRoute);
router.use('/api', apiRoutes);

module.exports = router;