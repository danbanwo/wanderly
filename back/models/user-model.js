'use strict';

module.exports = function(sequelize, DataTypes){
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
      classMethods: {
        associate: function(models) {
          User.hasOne(models.Profile)
        }
      }
    }
  );
  return User;
};