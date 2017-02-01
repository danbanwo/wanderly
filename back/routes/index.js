const router = require('express').Router();

router.use('/itinerary', require('./itinerary-router'));


module.exports = router;