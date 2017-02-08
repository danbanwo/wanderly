"use strict";

module.exports = function(sequelize, DataTypes) {
  var Itinerary = sequelize.define("Itinerary", {
    pictures: DataTypes.STRING,
    description: DataTypes.STRING,
    place: DataTypes.STRING,
    long: DataTypes.FLOAT,
    lati: DataTypes.FLOAT,
    total: DataTypes.INTEGER,
    category: DataTypes.STRING
    }, {
    classMethods: {
      associate: function(models) {
        Itinerary.belongsTo(models.Destination, {
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
