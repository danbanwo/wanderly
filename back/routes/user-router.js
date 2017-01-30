const userRouter = require('express').Router();
const user = require('../models').User();

const getAllUsers = (req, res) => {
	user.findAll()
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		console.log("ERROR GETTING BLAH ===>", err)
		res.sendStatus(500)
	})
}

userRouter.route('/')
	.get(getAllUsers)

module.exports = userRouter;