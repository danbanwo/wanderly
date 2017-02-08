const itinerarySeed = require('./itinerary-seed');
const profileSeed = require('./profile-seed');
const destinationSeed = require('./destination-seed');
var db = require('../models')

db.sequelize.sync().then(function(){
	profileSeed();
 	itinerarySeed();
	destinationSeed();
});
