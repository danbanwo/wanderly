"use strict";

module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define("Profile", {
    name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    wander_points: DataTypes.INTEGER,
    age: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    country_origin: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Profile.hasMany(models.Trips, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Profile;
};