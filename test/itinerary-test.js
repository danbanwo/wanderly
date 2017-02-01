var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server');
var itinerary = require('../back/models').Itinerary;

describe('itinerary-api-test', () => {

  var itinerary = [
    {pictures: 'https://s-media-cache-ak0.pinimg.com/564x/d1/35/ca/d135ca708f1c3efcf9c890943dabff68.jpg', description: 'this ice cream was so expensive', place: 'New York', long: 5, lati: 6, total: 15, category: 'eat'},

   {pictures: 'http://www.lolotrail.fr/wp-content/uploads/2015/11/thin-0545_map_travel_distance_directions-512.png', description: 'Free Museum admission on Mondays', place: 'Upper West Side', long: 5, lati: 7, total: 0, category: 'play'},
    
   {pictures: 'https://cdn0.iconfinder.com/data/icons/thin-navigation/24/thin-0546_map_travel_destination_location_world-512.png', description: 'HATE Trump hotels', place: 'Midtown East', long: 8, lati: 6, total: 50, category: 'sleep'},
  ];


  before(() => {
    return itinerary.sync({force: true})
    .then(() => itinerary.bulkCreate(Itinerary))
    .catch((err) => console.log('DB Err!', err));
  });

  //Test to get all itinerary route
  it(`'/api/itinerary' should get all itinerary locations`, (done) => {
    supertest(server)
      .get('/api/itinerary')
      .end((err, res) => {
        expect(res.body.length).equal(3);
        expect(res.body[0].itinerary).equal(itinerary[0].place);
        done();
      })
  });
});
