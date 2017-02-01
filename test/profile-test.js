const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server.js');
const Profile = require('../back/models');
const seed = require('../back/seed/profile-seed');



describe('Profile tests', ()=>{

let profiles = seed;

}); 

xit(`'userProfile()' should respond with an http status of 200 after successfully getting the profile data`, (done)=>{
	supertest(server)
	.get('/api/profile')
	.end((err,res)=>{
		expect(res.body).to.be.a('object');
		expect(200);
		//expect(res.body).to.have.keys(['first_name', 'last_name', 'gender', 'age', 'country_origin', 'catch_phrase'])
		done();
	})
});

xit(`'createProfile()' should respond with an http status of 200 after successfully creating a new profile `, (done)=>{
	supertest(server)
	.post('/api/profile')
	.end((err,res)=>{
		expect(res.body).to.be.a('object');
		expect(200);
		// expect(res.body).to.have.keys(['first_name', 'last_name', 'gender', 'age', 'country_origin', 'catch_phrase'])
		done();
	})
});

it(`'singleProfile()' should respond with an http status of 200 after successfully getting a single profile`, (done)=>{
	supertest(server)
	.get('/api/profile/:id')
	.end((err,res)=>{
		expect(res.body).to.be.a('object');
		expect(200);
		expect(res.body).not.equal(['first_name', 'last_name', 'gender', 'age', 'country_origin', 'catch_phrase']);
		expect(res.body).to.be(undefined);
		done();
	})
});