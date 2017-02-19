// var assert = require('assert');
// const expect = require('chai').expect;

// beforeEach(function() {
//    // console.log("haha I'm before each test")
//  });

// describe('Array', function() {
//   describe('type', function() {
//     it('should be an array', function() {
//       expect(1).to.be.a('array');
//       expect([1,2,3]).to.be.a('array');

//       //[1,2,3].indexOf(0).should.equal(-1);
//     });
//   });
// });

const expect = require('chai').expect;
const request = require('supertest');
const express = require('express');

const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
  	console.log("bla")
    if (err) throw err;
  });
