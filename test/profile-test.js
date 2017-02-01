const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('./server.js');
const Profile = require('../models');
const seed = require('./seed/profile-seed');



describe('Profile tests', ()=>{
	
let profiles = seed;

}); 

it(`'/' should respond with an http status of 200 after successfully getting the profile data`, (done)=>{
	supertest(server)
	.get('/')
	.end((err,res)=>{
		expect(res.text).to.eql('OK');
		done();
	})
});

it(`'/' should respond with an http status of 200 after successfully creating a new profile `, (done)=>{
	supertest(server)
	.post('/')
	.end((err,res)=>{
		expect(res.text).to.eql('OK');
		done();
	})
});

it(`'/:id' should respond with an http status of 200 after successfully getting a single profile`, (done)=>{
	supertest(server)
	.get('/:id')
	.end((err,res)=>{
		expect(res.text).to.eql('OK');
	})
});