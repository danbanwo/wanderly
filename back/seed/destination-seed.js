var Destination = require('../models').Destination;


let destinationArr = [
  {
    place: 'New York',
    duration: '3 weeks',
    lat: 40.7142700,
    lng: -74.0059700,
    country: 'USA',
    total_spent: 500,
    ProfileId: 1
  },
  {
    place: 'Amsterdam',
    duration: '8 weeks',
    lat: 52.3740300,
    lng: 4.8896900,
    country: 'Netherlands',
    total_spent: 2500,
    ProfileId: 1
  },
  {
    place: 'Prague',
    duration: '2 weeks',
    lat: 50.0880400,
    lng: 14.4207600,
    country: 'Czech Republic',
    total_spent: 1000,
    ProfileId: 2
  }
];

const destinationSeed = () => {
  Destination.bulkCreate(destinationArr)
}

module.exports = destinationSeed;
