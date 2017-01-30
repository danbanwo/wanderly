'use strict';
module.exports = function(sequelize, DataTypes) {
  var Itinerary = sequelize.define('Itinerary', {
    total_amount: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Itinerary.hasMany(models.Location)
        Itinerary.belongsTo(models.Trip)
      }
    }
  });
  return Itinerary;
};