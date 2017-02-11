'use strict'

var Destination = require('../models').Destination;

let destinationArr = [
  {
    place: 'New York',
    duration: '3 weeks',
    total_spent: 1500,
    country: 'United States',
    lat: 40.730610,
    lng: -73.935242,
    ProfileId: 1
  },
  {
    place: 'Seoul',
    duration: '4 weeks',
    total_spent: 5500,
    country: 'South Korea',
    lat: 37.532600, 
    lng: 127.02461,
    ProfileId: 1
  },
  {
    place: 'Paris',
    duration: '2 weeks',
    total_spent: 1000,
    country: 'France',
    lat: 48.864716,
    lng: 2.349014,
    ProfileId: 2
  },
  {
    place: 'Milan',
    duration: '1 day',
    total_spent: 200,
    country: 'Italy',
    lat: 45.464211,
    lng: 9.191383,
    ProfileId: 2
  },
  {
    place: 'Florence',
    duration: '2 days',
    total_spent: 300,
    country: 'Italy',
    lat: 43.768009,
    lng: 11.253165,
    ProfileId: 2
  }, 
  {
    place: 'Venice',
    duration: '1 day',
    total_spent: 150,
    country: 'Italy',
    lat: 45.444958,
    lng: 12.328463,
    ProfileId: 2
  },
  {
    place: 'Naples',
    duration: '1 week',
    total_spent: 1500,
    country: 'Italy',
    lat: 40.853294,
    lng: 14.305573,
    ProfileId: 2
  },
  {
    place: 'Amsterdam',
    duration: '1 week',
    total_spent: 2500,
    country: 'Netherlands',
    lat: 52.379189, 
    lng: 4.899431,
    ProfileId: 3
  },
  {
    place: 'Machu Picchu',
    duration: '1 week',
    total_spent: 500,
    country: 'Peru',
    lat: -12.1947355, 
    lng: -77.00594000000001,
    ProfileId: 3
  },
  {
    place: 'The Andes',
    duration: '3 days',
    total_spent: 500,
    country: 'Peru',
    lat: 42.188935, 
    lng: -74.78580369999997,
    ProfileId: 3
  },
];

const destinationSeed = () => {
  Destination.bulkCreate(destinationArr)
}

module.exports = destinationSeed;
