const itineraryRouter = require('express').Router();
const itinerary = require('../models').Itinerary;

const getItinerary = (req, res) => {
	itinerary.findById(req.params.id)
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		console.log("ERROR GETTING ITINERARY BY ID ===>", err)
		res.sendStatus(500)
	})
}

//URL is at /api/itinerary
itineraryRouter.route('/')
	.get(getItinerary)

module.exports = itineraryRouter;