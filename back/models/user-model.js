"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: { 
      type: DataTypes.STRING,
      isEmail: true
    },
    user_name: DataTypes.STRING,
    password: { 
      type: DataTypes.STRING,
      isAlphanumeric: true
    },
  }, {
    classMethods: {
      associate: function(models) {
        User.hasOne(models.Profile, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return User;
};