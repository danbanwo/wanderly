const profileRouter = require('express').Router();
const profile = require('../models').Profile;

//This will handle any routes going to localhost:3000/api/profile/*

const userProfile = (req,res)=>{
	Profile.findAll()
	.then((data)=>{
		console.log('This is his/her profile!', data)
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const singleProfile = (req,res)=>{
	Profile.findById(req.params.id)
	.then((data)=>{
		console.log('You got one profile!', data)
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const createProfile = (req,res)=>{
	Profile.create({
		first_name:req.params.firstName,
		last_name:req.params.lastName,
		gender:req.params.gender,
		age:req.params.age,
		country_origin:req.params.country,
		catch_phrase:req.params.phrase
	})
	.then((data)=>{
		console.log('You have created a new profile!!!',data)
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

profileRouter.route('/')
	.get(userProfile)
	.post(createProfile)

profileRouter.route('/:id')
	.get(singleProfile)


module.exports = profileRouter;
