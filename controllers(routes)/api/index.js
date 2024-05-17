const router = require('express').Router();
const dasboardRoute = require('../dashboardRoute');
const userInfoLogoutRoute = require('./userInfoLogoutRoute');
const blogPostRoute = require('./blogPostRoute');

router.use('/user', userInfoLogoutRoute);
router.use('./dashboard', dasboardRoute);
router.use('./blogPost', blogPostRoute)

module.exports = router;