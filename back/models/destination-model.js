'use strict';
module.exports = function(sequelize, DataTypes) {
  var Destination = sequelize.define('Destination', {
    place: DataTypes.STRING,
    duration: DataTypes.STRING,
    total_spent: DataTypes.INTEGER,
    country: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
  }, {
    classMethods: {
      associate: function(models) {
        Destination.hasMany(models.Wanderspot)
        Destination.belongsTo(models.Profile)
      }
    }
  });
  return Destination;
};
