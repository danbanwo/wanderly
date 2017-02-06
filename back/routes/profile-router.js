const profileRouter = require('express').Router();
const profile = require('../models').Profile;

//This will handle any routes going to localhost:3000/api/profile/*

const userProfiles = (req,res)=>{
	profile.findAll()
	.then((data)=>{
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const singleProfile = (req,res)=>{
	profile.findById(req.body.id)
	.then((data)=>{
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const createProfile = (req,res)=>{
	console.log(req.body, 'what is this??')
	profile.create({
		first_name:req.body.first_name,
		last_name:req.body.last_name,
		gender:req.body.gender,
		age:req.body.age,
		country_origin:req.body.country_origin,
		catch_phrase:req.body.catch_phrase
	})
	.then((data)=>{
		res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

profileRouter.route('/')
	.get(userProfiles)
	.post(createProfile)

profileRouter.route('/:id')
	.get(singleProfile)


module.exports = profileRouter;
