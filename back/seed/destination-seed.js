var Destination = require('../models').Destination;


let destinationArr = [
  {
    place: 'New York',
    duration: '3 weeks',
    total_spent: 500
  },
  {
    place: 'Amsterdam',
    duration: '8 weeks',
    total_spent: 2500
  },
  {
    place: 'Prague',
    duration: '2 weeks',
    total_spent: 1000
  }
];

const destinationSeed = () => {
  Destination.sync({force:true})
  .then(() => {
    Destination.bulkCreate(destinationArr)
  })
}

module.exports = destinationSeed;
