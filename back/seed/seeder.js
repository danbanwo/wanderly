const itinerarySeed = require('./itinerary-seed');
const profileSeed = require('./profile-seed')
var db = require('../models')

db.sequelize.sync().then(function(){
	profileSeed();
 	itinerarySeed()
});