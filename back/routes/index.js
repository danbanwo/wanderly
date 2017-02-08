const router = require('express').Router();

router.use('/wanderspot', require('./wanderspot-router'));
router.use('/profile', require('./profile-router'));
router.use('/destination', require('./destination-router'));


module.exports = router;
