const profileRouter = require('express').Router();
const profile = require('../models').Profile;
const formidable = require('formidable');
const path = require('path');
const Destination = require('../models').Destination;
const Wanderspot = require('../models').Wanderspot;

//This will handle any routes going to localhost:3000/api/profile/*

const userProfiles = (req,res)=>{
	profile.findAll()
	.then((data)=>{
		res.send(data);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const singleProfile = (req,res)=>{
	profile.findById(req.params.id, {
		include: [{
			model: Destination,
			include: [{
				model: Wanderspot}]
		}]
	})
	.then((data)=>{
		res.send(data);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const createProfile = (req,res)=>{
	profile.create(req.body)
	.then((data)=>{
		res.send(data.dataValues);
	})
	.catch((error)=>{
		throw(error)
		// res.sendStatus(500);
	})
}


const uploadPhoto = (req,res) => {
	var form = new formidable.IncomingForm();

	form.parse(req);

	form.on('fileBegin', (name, file) => {
		file.path = path.join(__dirname, '../../front/public/userphotos', file.name);
	});

	form.on('file', (name,file) => {
	//checking to see if an image exist, if not a default photo will be set
		let imageExist = file.path

		if(imageExist){
			let imagePath = 'http://localhost:3000/userphotos/' + file.name
			res.end(JSON.stringify({imagePath: imagePath}))
		}
	});
}


profileRouter.route('/')
	.get(userProfiles)
	.post(createProfile)

profileRouter.route('/:id')
	.get(singleProfile)

profileRouter.route('/upload')
	.post(uploadPhoto)


module.exports = profileRouter;
