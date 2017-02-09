var Wanderspot = require('../models').Wanderspot;


let wanderspotArr = [
  {
    pictures: 'http://traveldigg.com/wp-content/uploads/2016/05/Central-Park-New-York-720x404.jpg',
    description: 'the best park evar! Definitely NOT Central Perk from friends...',
    spot: 'Central Park',
    lng: -73.968285,
    lat: 40.785091,
    total: 0,
    category: 'play',
    DestinationId: 1
  },
  {
    pictures: 'http://www.nyhabitat.com/blog/wp-content/uploads/2013/01/Times-square-manhattan-new-york-nyc-crossroads-world.jpg',
    description: 'I can see why they dubbed this the city that never sleeps. It is bright as DAY BREAK.',
    spot: 'Times Square',
    lng:  -73.985130,
    lat: 40.758896,
    total: 0,
    category: 'play',
    DestinationId: 1
  },
  {
    pictures: 'http://s3.amazonaws.com/production.reserve123/images/product/16051-1.jpg',
    description: 'took a boat cruise to the lady',
    spot: 'Statue of Liberty',
    lng: -74.044502,
    lat: 40.689247,
    total: 12,
    category: 'play',
    DestinationId: 1

  },
  {
    pictures: 'https://s-media-cache-ak0.pinimg.com/564x/2a/c2/e8/2ac2e890e8e610782a83dde48b0114fd.jpg',
    description: 'OHMYGAAH THIS INDOOR PARK IS LIT!!!',
    spot: 'Lotte World',
    lng: 37.511566,
    lat: 127.098311,
    total: 45,
    category: 'play',
    DestinationId: 1
  },
  {
    pictures: 'http://cdn.havehalalwilltravel.com/wp-content/uploads/2015/08/myeongdong-shopping.jpg?x87844',
    description: 'Korean sizes are friggin petite but I love the fashion and this place is like Times Square times ten!',
    spot: 'Myeongdong',
    lng: 126.981993,
    lat: 37.562662,
    total: 300,
    category: 'play',
    DestinationId: 1
  },
  {
    pictures: 'https://s-media-cache-ak0.pinimg.com/originals/a6/38/06/a63806e9263ae04f95cb2d75dd05e159.jpg',
    description: 'The city of love! What a romantic spot. Just a bus ride away from my hotel.',
    spot: 'Eiffel Tower',
    lng: 2.294694,
    lat: 48.858093,
    total: 5,
    category: 'play',
    DestinationId: 2
  },
  {
    pictures: 'https://www.ephotozine.com/articles/town---city-night-photography-tips-17672/images/Paris.jpg',
    description: 'Like a turtle shell! Spent only $12 earlier for the ticket.',
    spot: 'The Louvre',
    lng: 2.3417,
    lat: 48.859,
    total: 12,
    category: 'play',
    DestinationId: 2
  },
  {
    pictures: 'http://eat-trotter.com/wp-content/uploads/2014/01/laduree1.jpg',
    description: "Prettiest of all Paris' patisseries. I settled for 6 macarons and a cup of hot chocolate. Pricey, yes. Worth it? Absolutely.",
    spot: 'Ladurée',
    lng: 2.323655,
    lat: 48.868498,
    total: 25,
    category: 'eat',
    DestinationId: 2
  },
  {
    pictures: 'http://aff.bstatic.com/images/hotel/840x460/628/62886304.jpg',
    description: "Spent a night in Milan and ate hotel food.",
    spot: 'Mandarin Oriental',
    lng: 9.190933,
    lat: 45.469477,
    total: 1000,
    category: 'sleep',
    DestinationId: 2
  },
];

const wanderspotSeed = () => {
    Wanderspot.bulkCreate(wanderspotArr)
}

module.exports = wanderspotSeed;

