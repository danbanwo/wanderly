const router = require('express').Router();

//present URL is /api
router.use('/sample', require('./sample-router'))
//lisa's user example
router.use('/user', require('./user-router'));

