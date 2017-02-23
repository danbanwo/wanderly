'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    categories: DataTypes.ARRAY(DataTypes.STRING),
    image: DataTypes.STRING,
    country_origin: DataTypes.STRING,
    catch_phrase: DataTypes.STRING,
    category: DataTypes.ARRAY(DataTypes.STRING)
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
