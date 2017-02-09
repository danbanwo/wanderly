 'use strict';
module.exports = function(sequelize, DataTypes) {
  var Profile = sequelize.define('Profile', {
    image:{
      type:DataTypes.STRING,
      allowNull:true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    country_origin: DataTypes.STRING,
    catch_phrase: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Profile.hasMany(models.Adventure, {
        //   onDelete: "CASCADE",
        //   foreignKey:{
        //     allowNull: false
        //   }
        // });
      }
    }
  });
  return Profile;
};