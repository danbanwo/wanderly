var itinerary = require('../models').Itinerary;


let itineraryArr = [
  {
    pictures: 'http://traveldigg.com/wp-content/uploads/2016/05/Central-Park-New-York-720x404.jpg',
    description: 'the best park evar',
    place: 'Central Park',
    long: -73.968285,
    lati: 40.785091,
    total: 0,
    category: 'play'
  },
  {
    pictures: 'http://www.nyhabitat.com/blog/wp-content/uploads/2013/01/Times-square-manhattan-new-york-nyc-crossroads-world.jpg',
    description: 'the city that never sleeps',
    place: 'Times Square',
    long:  -73.985130,
    lati: 40.758896,
    total: 0,
    category: 'play'
  },
  {
    pictures: 'http://s3.amazonaws.com/production.reserve123/images/product/16051-1.jpg',
    description: 'boat cruise to the lady',
    place: 'Statue of Liberty',
    long: -74.044502,
    lati: 40.689247,
    total: 12,
    category: 'play'
  }
];

const itinerarySeed = () => {
  var a = itinerary.sync({force:true})
  .then(() => {
    itinerary.bulkCreate(itineraryArr)
  })
}

module.exports = itinerarySeed;



// const itinerarySeed = () => {
//   itineraryArr.forEach((place) => {
//     itinerary.create(place)
//   })
// }


