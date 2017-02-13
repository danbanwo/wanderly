
const profileRouter = require('express').Router();
const profile = require('../models').Profile;
const imgur = require('imgur');
// const cilentID = 'd3c58b96f328754';
// const cilentSecret = '8f51df6d11617b32da958de7b31521ba4d63b586';
// // const cilent = new ImgurCilent(cilentID, cilentSecret);
const fileUpload = require('express-fileupload');




// const endpoint = new ImageEndpoint(cilent);
// const userImage = await endpoint.UploadImageUrlAsync('http://madamenoire.com/wp-conten//uploads/2016/03/travel-safe.jpg');


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
		image: req.body.image,
		fullName:req.body.fullName,
		age: req.body.age,
		gender:req.body.gender,
		country_origin:req.body.country_origin,
		catch_phrase:req.body.catch_phrase, 
	})
	.then((data)=>{
		res.send(data)
		console.log(data, 'DATAAA!')
		// res.sendStatus(200);
	})
	.catch((error)=>{
		res.sendStatus(500);
	})
}

const uploadPhoto = (req,res)=>{
	profile.create({image: sampleFile})
	.then((data)=>{
		if(!req.files){
			res.send('No files were uploaded.');
			return;
		}
		sampleFile = req.files.sampleFile;
		sampleFile.mv('../front/public/profile_pics/girltraveling.jpg', (err)=>{
			if(err){
				res.status(500).send(err);
			}
			else{
				res.send('File uploaded!')
			}
		});
	});
}

// const userPhoto = (req,res)=>{
// 	profile.findById(req.params.id)
// 	.then((data)=>{
// 		res.send({image: userImage})
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

profileRouter.route('/upload')
	.post(uploadPhoto)


// profileRouter.route('/profilepic/:id')
// 	.get(userPhoto);


module.exports = profileRouter;
