'use strict'

const Profile = require('../models').Profile;

let profileArr = [ 
  {
    "fullName":"Emily Anderson",
    "gender":"Female",
    "age":18,
    "image":"http://dummyimage.com/232x120.png/dddddd/000000",
    "country_origin":"China",
    "catch_phrase":"I love to try new foods!"
  },
  {
    "fullName":"Ruby Mason",
    "gender":"Female",
    "age":23,
    "image":"http://dummyimage.com/184x159.png/cc0000/ffffff",
    "country_origin":"Indonesia",
    "catch_phrase":"I love to relax and rejuvenate!"
  },
  {
    "fullName":"Kevin Day",
    "gender":"Male",
    "age":25,
    "image":"http://dummyimage.com/232x145.bmp/cc0000/ffffff",
    "country_origin":"Indonesia",
    "catch_phrase":"I love being in a different scenery"
  }
];

const profileSeed = () =>{
  Profile.sync({force:true})
  .then(()=>{
    Profile.bulkCreate(profileArr)
  })
};

module.exports = profileSeed;
