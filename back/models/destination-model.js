'use strict';
module.exports = function(sequelize, DataTypes) {
  var Destination = sequelize.define('Destination', {
    place: DataTypes.STRING,
    duration: DataTypes.STRING,
    total_spent: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Destination.hasOne(models.Itinerary)
      }
    }
  });
  return Destination;
};
