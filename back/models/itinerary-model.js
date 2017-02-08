"use strict";

module.exports = function(sequelize, DataTypes) {
  var WanderSpot = sequelize.define("Itinerary", {
    pictures: DataTypes.STRING,
    description: DataTypes.STRING,
    spot: DataTypes.STRING,
    long: DataTypes.FLOAT,
    lati: DataTypes.FLOAT,
    total: DataTypes.INTEGER,
    category: DataTypes.STRING
    }, {
    classMethods: {
      associate: function(models) {
        WanderSpot.belongsTo(models.Destination, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Itinerary;
};
