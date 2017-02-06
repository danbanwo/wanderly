
// //fake itinerary data to use for the tests
//   var itinerary = [
//     {pictures: 'https://s-media-cache-ak0.pinimg.com/564x/d1/35/ca/d135ca708f1c3efcf9c890943dabff68.jpg', description: 'this ice cream was so expensive', place: 'New York', long: 5, lati: 6, total: 15, category: 'eat'},



//   //Test to get all existing itineraries
//   it(`'/api/itinerary' should get all itineraries`, (done) => {
//     supertest(server)
//       .get('/api/itinerary')
//       .end((err, res) => {
//         expect(res.body.length).equal(3);
//         expect(res.body[0].itinerary).equal(itinerary[0].place);
//         done();
//       })
//   });

//   //Test to create new itinerary
//   it(`'/api/itinerary' should add new itinerary`, (done) => {
//     var newItinerary = {pictures: 'https://s-media-cache-ak0.pinimg.com/564x/d1/35/ca/d135ca708f1c3efcf9c890943dabff68.jpg', description: 'this ice cream was so expensive', place: 'New York', long: 7, lati: 7, total: 77, category: 'eat'}
//     supertest(server)
//       .post('/api/itinerary')
//       .send(newItinerary)
//       .end((err, res) => {
//         expect(res.body.place).equal(newUser.place);
//         expect(res.body.long).equal(newUser.long);
//         expect(res.body.lati).equal(newUser.lati);
//         expect(res.body.description).equal(newUser.description);
//         done();
//       })
//   })

//     //Test to get a specific destinations' itinerary
//   it(`'/api/itinerary/:id' should respond with a specific itinerary`, (done) => {
//     supertest(server)
//       .get('/api/itinerary/1')
//       .end((err, res) => {
//         expect(res.body.id).equal(1);
//         expect(res.body.pictures).equal(itinerary[0].pictures);
//         expect(res.body.description).equal(itinerary[0].description);
//         expect(res.body.place).equal(itinerary[0].place);
//         expect(res.body.category).equal(itinerary[0].category);
//         done();
//       })
//   });
// });

