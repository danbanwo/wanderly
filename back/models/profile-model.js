'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    image: DataTypes.STRING,
    country_origin: DataTypes.STRING,
    catch_phrase: DataTypes.STRING,
    categories: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    classMethods: {
      associate: function(models) {
        Profile.hasMany(models.Destination, {
          onDelete: "CASCADE",
          foreignKey:{
            allowNull: true
          }
        });
      }
    }
  });
  return Profile;
};