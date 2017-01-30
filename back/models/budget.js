'use strict';
module.exports = function(sequelize, DataTypes) {
  var Budget = sequelize.define('Budget', {
    place: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    category: DataTypes.STRING,
    item: DataTypes.STRING,
    item_description: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Budget.belongsTo(models.Location, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
      }
    }
  });
  return Budget;
};


