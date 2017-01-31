const router = require('express').Router();

//present URL is /api
router.use('/sample', require('./sample-router'))

//lisa's itinerary example (add yours below)
router.use('/itinerary', require('./itinerary-router'));

router.use('/profile', require('./profile-router'));