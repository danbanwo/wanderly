'use strict';
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define('Location', {
    pictures: DataTypes.STRING,
    name_of_place: DataTypes.STRING,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    coordinates: DataTypes.INTEGER,
    amount_spent: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Location;
};