const wanderspotRouter = require('express').Router();
const wanderspot = require('../models').Wanderspot;

const getWanderSpot = (req, res) => {
	wanderspot.findById(req.params.id)
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		res.sendStatus(500)
	})
};

const getAllWanderspots = (req, res) => {
	wanderspot.findAll()
	.then((data) => {
		res.sendStatus(200)
	})
	.catch((err) => {
		res.sendStatus(500)
	})
};

const addWanderspot = (req, res) => {
	console.log("req.body:", req.body)
	wanderspot.create(req.body)
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		res.sendStatus(500)
	})
};

const updateWanderspot = (req, res) => {
	wanderspot.findOne( {where: {id: req.params.id} })
	.then((wanderspot) => {
		wanderspot.update(req.body)
	})
	.then(() => {res.sendStatus(200)})
	.catch((err) => {
		res.sendStatus(500)
	})
};

const getItinerary = (req, res) => {
	wanderspot.findAll({
		where: {
			DestinationId: req.params.destId
		}
	})
	.then((itinerary) => {
		if(!itinerary) {
			res.send('Add a Spot')
		}
		res.send(itinerary)
	})
	.catch((err) => {
		res.sendStatus(500)
	})
};



//URL is at /api/wanderspot/
wanderspotRouter.route('/:id')
	.get(getWanderSpot)
	.put(updateWanderspot)

wanderspotRouter.route('/')
	.get(getAllWanderspots)
	.post(addWanderspot)

//Itinerary is ALL the wanderspots for that particular destination
wanderspotRouter.route('/itinerary/:destId')
	.get(getItinerary)




module.exports = wanderspotRouter;
