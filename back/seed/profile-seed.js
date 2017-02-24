'use strict'

const Profile = require('../models').Profile;

let profileArr = [ 
  {
    fullName: 'Jane Doe',
    gender: 'female',
    photo: 'https://s-media-cache-ak0.pinimg.com/originals/20/97/6c/20976c5b131a6c2d503aa4a7ec0fd3a0.jpg',
    country_origin: 'United States',
    catch_phrase: "I'm here for a good time, not a long time!",
    category: ['Food', 'Culture & Art ', 'Activities', 'Relaxation', 'Independence', 'Backpacking']
  },
  {
    fullName: 'Chun Li',
    gender: 'female',
    photo: 'http://blogs.publico.es/strambotic/files/2014/10/hipster-tia.jpg',
    country_origin: 'China',
    catch_phrase: "I'm interested in learning languages and tryng new foods",
    category: ['Food', 'Culture & Art ', 'Activities', 'Relaxation', 'Independence', 'Backpacking']
  },
  {
    fullName: 'Collin Smith',
    gender: 'male',
    photo: 'http://images.amcnetworks.com/bbcamerica.com/wp-content/uploads/2013/06/Hipster.jpg',
    country_origin: 'Ireland',
    catch_phrase: 'I love to meet people all over the world!',
    category: ['Food', 'Culture & Art ', 'Activities', 'Relaxation', 'Independence', 'Backpacking']
  },
];

const profileSeed = () =>{
  Profile.bulkCreate(profileArr)
};

module.exports = profileSeed;
