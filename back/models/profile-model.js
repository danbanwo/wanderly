'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    country_origin: DataTypes.STRING,
    catch_phrase: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
<<<<<<< HEAD
=======
        // associations can be defined here
>>>>>>> lisatest
        Profile.hasMany(models.Destination, {
          onDelete: "CASCADE",
          foreignKey:{
            allowNull: false
          }
        });
      }
    }
  });
  return Profile;
};
