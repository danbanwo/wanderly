var Wanderspot = require('../models').Wanderspot;


let wanderspotArr = [
  {
    pictures: 'http://traveldigg.com/wp-content/uploads/2016/05/Central-Park-New-York-720x404.jpg',
    description: 'the best park evar',
    spot: 'Central Park',
    lng: -73.968285,
    lat: 40.785091,
    total: 0,
    category: 'play',
    DestinationId: 1
  },
  {
    pictures: 'http://www.nyhabitat.com/blog/wp-content/uploads/2013/01/Times-square-manhattan-new-york-nyc-crossroads-world.jpg',
    description: 'the city that never sleeps',
    spot: 'Times Square',
    lng:  -73.985130,
    lat: 40.758896,
    total: 0,
    category: 'play',
    DestinationId: 1
  },
  {
    pictures: 'http://s3.amazonaws.com/production.reserve123/images/product/16051-1.jpg',
    description: 'boat cruise to the lady',
    spot: 'Statue of Liberty',
    lng: -74.044502,
    lat: 40.689247,
    total: 12,
    category: 'play',
    DestinationId: 1

  }
];

const wanderspotSeed = () => {
    Wanderspot.bulkCreate(wanderspotArr)
}

module.exports = wanderspotSeed;



// const itinerarySeed = () => {
//   itineraryArr.forEach((place) => {
//     itinerary.create(place)
//   })
// }
