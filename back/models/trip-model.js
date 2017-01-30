'use strict';
module.exports = function(sequelize, DataTypes) {
  var Trip = sequelize.define('Trip', {
    name: DataTypes.STRING,
    destination: DataTypes.STRING,
    length: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Trip.hasOne(models.Itinerary)
      }
    }
  });
  return Trip;
};