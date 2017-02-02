const router = require('express').Router();

router.use('/itinerary', require('./itinerary-router'));


router.use('/profile', require('./profile-router'));


module.exports = router;

