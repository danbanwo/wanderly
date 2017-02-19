const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server.js');
const destinationSeed = require('../back/seed/destination-seed');

describe('Destination tests', () => {
  beforeEach((done) => {
    destinationSeed();
    done();
  });
});

it(`'All Destinations' should return all destinations`, (done) => {
  supertest(server)
  .get('api/destination')
  .end((err, res) => {
    // assert (typeof(res.body) === "array")
    console.log("res:", res)
    expect(res.body).to.be.a('array');
    expect(200);
    expect(res.body.length).to.eql(3);
    done();
  });
});

it(`'Add Destination' should create a new destination`, (done) => {
  const newDestination = {
    place: 'Hong Kong',
    duration: '5 days',
    total_spent: 4000,
  };
  supertest(server)
  .post('/api/destination')
  .send(newDestination)
  .end((err, res) => {
    expect(res.body).to.be.a('object');
    expect(200);
    expect(res.body).not.equal(null);
    expect(res.body).to.contain.all.keys(['place', 'duration', 'total_spent']);
    done();
  });
});

it(`'One Destination' should return one destination`, (done) => {
  supertest(server)
  .get('/api/destination/1')
  .end((err, res) => {
    expect(res.body).to.be.a('object');
    expect(200);
    expect(res.body).to.contain.all.keys(['place', 'duration', 'total_spent',]);
    done();
  });
});
