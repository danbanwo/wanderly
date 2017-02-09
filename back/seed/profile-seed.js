'use strict'

const Profile = require('../models').Profile;

let profileArr = [ 
  {
    first_name: 'Jane',
    last_name: 'Doe',
    gender: 'female',
    age: 19,
    photo: 'https://s-media-cache-ak0.pinimg.com/originals/20/97/6c/20976c5b131a6c2d503aa4a7ec0fd3a0.jpg',
    country_origin: 'United States',
    catch_phrase: 'I love trying foods from all over the world!'
  },
  {
    first_name: 'Chun',
    last_name: 'Li',
    gender: 'female',
    age: 25,
    photo: 'http://blogs.publico.es/strambotic/files/2014/10/hipster-tia.jpg',
    country_origin: 'China',
    catch_phrase: 'I am interested in learning languages!'
  },
  {
    first_name: 'Collin',
    last_name: 'Plaid',
    gender: 'male',
    age: 20,
    photo: 'http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2013/06/Hipster.jpg',
    country_origin: 'Ireland',
    catch_phrase: 'I love to meet new people!'
  },

];

const profileSeed = () =>{
  Profile.sync({force:true})
  .then(()=>{
    Profile.bulkCreate(profileArr)
  })
};

module.exports = profileSeed;
