'use strict';
var bcrypt = require('bcrypt-nodejs')

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
    }, {
       classMethods: {
      generateHash: function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
      }
    }

    }
  );
  return User;
};