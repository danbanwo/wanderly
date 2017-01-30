const sampleRouter = require('express').Router();
//require in the model and the associated models
const model = require('../models').Model();


//create the functions for the API calls
const blah = (req, res) => {
	user.findAll()
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		console.log("ERROR GETTING BLAH ===>", err)
		res.sendStatus(500)
	})
}

//URL is at /api/sample
sampleRouter.route('/')
	.get(blah)

//dont forget to export
module.export = sampleRouter;