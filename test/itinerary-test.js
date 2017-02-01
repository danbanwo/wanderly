// var expect = require('chai').expect;
// var supertest = require('supertest');
// var server = require('../back/server');
// var itinerary = require('../back/models').Itinerary;

// describe('itinerary-api-test', () => {

//   var itinerary = [
//     {pictures: '', description: '', place: '', long: '', lat: '', total: '', category: '' },
//   ];


//   before(() => {
//     return itinerary.sync({force: true})
//     .then(() => itinerary.bulkCreate(Itinerary))
//     .catch((err) => console.log('DB Err!', err));
//   });

//   //Test to get all itinerary route
//   it(`'/api/itinerary' should get all itinerary locations`, (done) => {
//     supertest(server)
//       .get('/api/users')
//       .end((err, res) => {
//         expect(res.body.length).equal(1);
//         expect(res.body[0].itinerary).equal(itinerary[0].place);
//         done();
//       })
//   });
// });
