'use strict'

const Profile = require('../models').Profile;

Profile.sync({force:true})
  .then(()=> {
    //This is where I am creating all of the profiles
    Profile.bulkCreate([{
  "first_name":"Emily",
  "last_name":"Anderson",
  "gender":"Female",
  "age":18,
  "photo":"http://dummyimage.com/232x120.png/dddddd/000000",
  "country_origin":"China",
  "phrase":"I love to try new foods!"
},
{
  "first_name":"Ruby",
  "last_name":"Mason",
  "gender":"Female",
  "age":71,
  "photo":"http://dummyimage.com/184x159.png/cc0000/ffffff",
  "country_origin":"Indonesia",
  "phrase":"I love to relax and rejuvenate!"
},
{
  "first_name":"Kevin",
  "last_name":"Day",
  "gender":"Male",
  "age":71,
  "photo":"http://dummyimage.com/232x145.bmp/cc0000/ffffff",
  "country_origin":"Indonesia",
  "phrase":"I love being in a different scenery"
  }])
})
.then(()=>{
  return Profile.findAll()
})
.then((data)=>{
  //If I found all of the profile data, this console log message will show
  if(data) console.log('Database seed successful!');
})
.catch((error)=>{
  //If I did not find all of the profile data, this error message will show
  if(error) console.error('Seed error!', error);
});
