'use strict'

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
    DestinationId: 2
  },
  {
    pictures: 'http://cdn.havehalalwilltravel.com/wp-content/uploads/2015/08/myeongdong-shopping.jpg?x87844',
    description: 'Korean sizes are friggin petite but I love the fashion and this place is like Times Square times ten!',
    spot: 'Myeongdong',
    lng: 126.981993,
    lat: 37.562662,
    total: 300,
    category: 'play',
    DestinationId: 2
  },
  {
    pictures: 'https://s-media-cache-ak0.pinimg.com/originals/a6/38/06/a63806e9263ae04f95cb2d75dd05e159.jpg',
    description: 'The city of love! What a romantic spot. Just a bus ride away from my hotel.',
    spot: 'Eiffel Tower',
    lng: 2.294694,
    lat: 48.858093,
    total: 5,
    category: 'play',
    DestinationId: 3
  },
  {
    pictures: 'https://www.ephotozine.com/articles/town---city-night-photography-tips-17672/images/Paris.jpg',
    description: 'Like a turtle shell! Spent only $12 earlier for the ticket.',
    spot: 'The Louvre',
    lng: 2.3417,
    lat: 48.859,
    total: 12,
    category: 'play',
    DestinationId: 3
  },
  {
    pictures: 'http://eat-trotter.com/wp-content/uploads/2014/01/laduree1.jpg',
    description: "Prettiest of all Paris' patisseries. I settled for 6 macarons and a cup of hot chocolate. Pricey, yes. Worth it? Absolutely.",
    spot: 'Ladurée',
    lng: 2.323655,
    lat: 48.868498,
    total: 25,
    category: 'eat',
    DestinationId: 3
  },
  {
    pictures: 'http://aff.bstatic.com/images/hotel/840x460/628/62886304.jpg',
    description: "Spent a night in Milan and ate hotel food.",
    spot: 'Mandarin Oriental',
    lng: 9.190933,
    lat: 45.469477,
    total: 1000,
    category: 'sleep',
    DestinationId: 4
  },
  {
    pictures: 'https://s-media-cache-ak0.pinimg.com/originals/b3/aa/4e/b3aa4e422bf95afb8335b5edffd0f6f7.jpg',
    description: "Seriously the best gelato ice cream ever!",
    spot: 'Gelateria La Carraia',
    lng: 11.246673,
    lat: 43.769643,
    total: 4,
    category: 'eat',
    DestinationId: 5
  },
  {
    pictures: 'http://cleocollective.com/wp-content/uploads/2015/03/Gelateria-dei-Neri-Best-Gelato-in-Florence-Tuscany-1024x768.jpg',
    description: "Okay florence has the best gelato in Italy for sure. Soooo much ice cream so cheap!",
    spot: 'Gelateria de Neri',
    lng: 11.259098,
    lat: 43.767764,
    total: 4,
    category: 'eat',
    DestinationId: 5
  },
  {
    pictures: 'http://cdn1.discovertuscany.com/img/florence/museums/botticelli-venus-uffizi.jpg?w=1140&q=60&auto=enhance',
    description: "I just saw classical paintings IRL. WOW.",
    spot: 'Uffizi Gallery',
    lng: 11.255311,
    lat: 43.767786,
    total: 30,
    category: 'play',
    DestinationId: 5
  },
  {
    pictures: 'https://wheninflorenceblog.files.wordpress.com/2013/07/all-antico-vinaio.jpg',
    description: "HUGE paninis for only 10euros. One is definitely enough for 2 people.",
    spot: 'SandwiChic',
    lng: 11.256195,
    lat: 43.777164,
    total: 10,
    category: 'eat',
    DestinationId: 5
  },
  {
    pictures: 'https://a0.muscache.com/im/pictures/33679999/2bee78f0_original.jpg?aki_policy=xx_large',
    description: "Stayed at this beautiful Airbnb that was close to everything",
    spot: 'Florence',
    lng: 11.253165,
    lat: 43.768009,
    total: 120,
    category: 'sleep',
    DestinationId: 5
  },
  {
    pictures: 'https://a0.muscache.com/im/pictures/14936106/ab62bd73_original.jpg?aki_policy=xx_large',
    description: "My Airbnb",
    spot: 'Venice',
    lng: 12.328463,
    lat: 45.444958,
    total: 73,
    category: 'sleep',
    DestinationId: 6
  },
  {
    pictures: 'http://www.thelifeofluxury.com/images/venice_italy_gondola_canal_ride.jpg',
    description: "Gondola ride! A half hour ride was 80 euros.",
    spot: 'Grand Canal',
    lng: 12.328463,
    lat: 45.444958,
    total: 80,
    category: 'play',
    DestinationId: 6
  },
  {
    pictures: 'http://www.vancouversun.com/cms/binary/8865305.jpg',
    description: "Risotto noodles with squid ink... very interesting.",
    spot: 'Risotto al nero di seppia',
    lng: 12.322569,
    lat: 45.433340,
    total: 80,
    category: 'eat',
    DestinationId: 6
  },
  {
    pictures: 'http://slice.seriouseats.com/images/2013/01/20121002-napoli-pizza-tour-35.jpg',
    description: "I looove pizza",
    spot: 'Pizzeria Di Matteo',
    lng: 14.257968,
    lat: 40.851251,
    total: 6,
    category: 'eat',
    DestinationId: 7
  },
  {
    pictures: 'http://slice.seriouseats.com/images/2013/01/20121002-napoli-pizza-tour-12.jpg',
    description: "Can you believe pizza is their normal daily meal?",
    spot: 'Starita',
    lng: 14.246381,
    lat: 40.855923,
    total: 6,
    category: 'eat',
    DestinationId: 7
  },
  {
    pictures: 'http://slice.seriouseats.com/images/2013/01/20121002-napoli-pizza-tour-24.jpg',
    description: "Julia Roberts was here!",
    spot: 'Da Michele',
    lng: 14.263303,
    lat: 40.849753,
    total: 5.50,
    category: 'eat',
    DestinationId: 7
  },
  {
    pictures: 'http://slice.seriouseats.com/images/2013/01/20121002-napoli-pizza-tour-32.jpg',
    description: "Pizza pizza pizza! I got a fresh mozz topping one.",
    spot: 'Pizzeria Presidente',
    lng: 14.259192,
    lat: 40.851642,
    total: 8,
    category: 'eat',
    DestinationId: 7
  },
  {
    pictures: 'http://slice.seriouseats.com/images/2013/01/20121002-napoli-pizza-tour-04.jpg',
    description: "This is supposedly the first pizzeria in the world.",
    spot: 'ANTICA PIZZERIA PORT ALBA',
    lng: 14.251753,
    lat: 40.849372,
    total: 5,
    category: 'eat',
    DestinationId: 7
  },
  {
    pictures: 'http://slice.seriouseats.com/images/2013/01/20121002-napoli-pizza-tour-17.jpg',
    description: "So much action with all the toppins and workers.",
    spot: 'PIZZERIA TRIANON DA CIRO',
    lng: 14.263687,
    lat: 40.850057,
    total: 6,
    category: 'eat',
    DestinationId: 7
  },
  {
    pictures: 'http://slice.seriouseats.com/images/2013/01/20121002-napoli-pizza-tour-56.jpg',
    description: "I looove pizza",
    spot: 'EUROPEO DI MATTOZZI',
    lng: 14.255806,
    lat: 40.843349,
    total: 5,
    category: 'eat',
    DestinationId: 7
  },
  {
   pictures: 'http://www.emmajanenation.com/wp-content/uploads/2013/10/De-Kas-Amsterdam_0018.jpg',
   description: "They grow their ingredients in-house. This restaurant is a green house!",
   spot: 'De Kas',
   lng: 4.930286,
   lat: 52.352200,
   total: 50,
   category: 'eat',
   DestinationId: 8
  },
  {
   pictures: 'http://albertcuyp-markt.amsterdam/wp-content/uploads/2015/12/original-stroopwafels-header-2.jpg',
   description: "Have you tried a stroopwafel after visiting a coffeeshop? It's a must",
   spot: 'Original Stroopwafels',
   lng: 4.895345,
   lat: 52.355957,
   total: 2,
   category: 'eat',
   DestinationId: 8
  },
  {
   pictures: 'http://www.facetourist.com/uploads/2/5/6/1/25616865/wallen-amsterdam-red-light-district-tour-trip-vacation-travel-traveling_orig.jpg',
   description: "Very Moulin Rougey...",
   spot: 'De Wallen',
   lng: 4.895861,
   lat: 52.371860,
   total: 0,
   category: 'play',
   DestinationId: 8
  },
  {
   pictures: 'https://cdn4.vtourist.com/4/7639989-Anne_Frank_House_Thought_Provoking_Museum.jpg?version=2',
   description: "No student discounts but it was worth the full price. Tragic story and history is felt.",
   spot: 'Anne Frank House',
   lng: 4.883977,
   lat: 52.375218,
   total: 20,
   category: 'play',
   DestinationId: 8
  },
  {
   pictures: 'http://trojantravel.usc.edu/wp-content/uploads/2015/07/Peru_Machu-Picchu-Llamas.jpg',
   description: "HIKED THIS BAD BOY!",
   spot: 'Machu Picchu',
   lng: -72.544963,
   lat: -13.163141,
   total: 55,
   category: 'play',
   DestinationId: 9
  },
  {
   pictures: 'http://pix.avaxnews.com/avaxnews/c4/bb/0001bbc4_medium.jpeg',
   description: "Almost at the boarder of chile!",
   spot: 'The Andes',
   lng: -66.775248,
   lat: -21.160767,
   total: 20,
   category: 'play',
   DestinationId: 10
  },
];

const wanderspotSeed = () => {
    Wanderspot.bulkCreate(wanderspotArr)
}

module.exports = wanderspotSeed;

