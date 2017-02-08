"use strict";

module.exports = function(sequelize, DataTypes) {
  var Wanderspot = sequelize.define("Wanderspot", {
    pictures: DataTypes.STRING,
    description: DataTypes.STRING,
    spot: DataTypes.STRING,
    lng: DataTypes.FLOAT,
    lat: DataTypes.FLOAT,
    total: DataTypes.INTEGER,
    category: DataTypes.STRING
    }, {
    classMethods: {
      associate: function(models) {
        Wanderspot.belongsTo(models.Destination, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Wanderspot;
};
