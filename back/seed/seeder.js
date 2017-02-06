const itinerarySeed = require('./itinerary-seed');
const profileSeed = require('./profile-seed')
var db = require('../models')

db.sequelize.sync().then(function(){
   itinerarySeed()

})


//profileSeed();

















// var fs        = require('fs');
// var path      = require('path');
// var Sequelize = require('sequelize');
// var basename  = path.basename(module.filename);


// var fileArr =[];
//  fs
//  .readdirSync(__dirname) 
//  .filter(function(fileName) {
//     return (fileName.indexOf('.') !== 0) && (fileName !== basename) && (fileName.slice(-3) === '.js');
//   })
//  .forEach(function(fileName) {
//  		eval((fs.readFileSync(fileName, 'utf8')));
//  })