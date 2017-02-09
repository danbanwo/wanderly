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
	profile.create({
		photo:req.body.photo,
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

// const userPhoto = (req,res)=>{
// 	profile.findById(req.params.id)
// 	.then((data)=>{
// 		res.send({photo: data.photo})
// 	})
// 	.catch((error)=>{
// 		res.sendStatus(500);
// 	})
// }

profileRouter.route('/')
	.get(userProfiles)
	.post(createProfile)

profileRouter.route('/:id')
	.get(singleProfile)

// profileRouter.route('/profilepic/:id')
// 	.get(userPhoto);


module.exports = profileRouter;
