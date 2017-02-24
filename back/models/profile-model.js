'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
<<<<<<< HEAD
    photo: DataTypes.STRING, 
    country_origin: DataTypes.STRING,
    catch_phrase: DataTypes.STRING,
    category: DataTypes.ARRAY(DataTypes.STRING)
=======
    age: DataTypes.INTEGER,
    image: DataTypes.STRING,
    country_origin: DataTypes.STRING,
    catch_phrase: DataTypes.STRING,
    categories: DataTypes.ARRAY(DataTypes.STRING)
>>>>>>> 8997c5b951069cdb5389ab5692cd157cc189082d
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
