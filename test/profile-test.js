const expect = require('chai').expect;
const supertest = require('supertest');
const server = require('../server.js');
const Profile = require('../back/models').Profile;
const seed = require('../back/seed/profile-seed');



describe('Profile tests', ()=>{
	beforeEach((done)=>{
		Profile.sequelize.sync({force:true}).then(function(){
			seed();
			done();
		})
	})
}); 

xit(`'userProfile()' should return all user profiles`, (done)=>{
	supertest(server)
	.get('/api/profile')
	.end((err,res)=>{
		expect(res.body).to.be.a('array');
		expect(200);
		expect(res.body.length).to.eql(3);
		done();
	})
});

xit(`'createProfile()' should create a new profile `, (done)=>{
	var newProfile = {
		first_name: 'Kelly',
		last_name: 'Rowland',
		gender: 'F',
		age: 30,
		country_origin: 'USA',
		catch_phrase: 'I am survivor!'
	}
	supertest(server)
	.post('/api/profile')
	.send(newProfile)
	.end((err,res)=> {
		expect(res.body).to.be.a('object');
		expect(200);
		expect(res.body).not.equal(null);
		expect(res.body).to.include.a('object');
		expect(res.body).to.contain.all.keys(['first_name', 'last_name', 'gender', 'age', 'country_origin', 'catch_phrase']);
		done();
	})
});

xit(`'singleProfile()' should return one profile`, (done)=>{
	supertest(server)
	.get('/api/profile/1')
	.end((err,res)=>{
		expect(res.body).to.be.a('object');
		expect(200);
		expect(res.body).not.equal(['first_name', 'last_name', 'gender', 'age', 'country_origin', 'catch_phrase']);
		done();
	})
});