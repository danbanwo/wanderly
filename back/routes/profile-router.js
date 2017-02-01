const profileRouter = require('express').Router();
const profile = require('../models').Profile;

//This will handle any routes going to localhost:3000/api/profile/*

const userProfile = (req,res)=>{
	profile.findAll()
	.then((data)=>{
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const singleProfile = (req,res)=>{
	profile.findById(req.params.id)
	.then((data)=>{
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const createProfile = (req,res)=>{
	profile.create({
		first_name:req.params.firstName,
		last_name:req.params.lastName,
		gender:req.params.gender,
		age:req.params.age,
		country_origin:req.params.country,
		catch_phrase:req.params.phrase
	})
	.then((data)=>{
		console.log('You have created a new profile!!!',data)
		res.send(data);
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
