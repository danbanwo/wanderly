const router = require('express').Router();

router.use('/itinerary', require('./itinerary-router'));


router.use('/profile', require('./profile-router'));

router.use('/destination', require('./destination-router'));


module.exports = router;
