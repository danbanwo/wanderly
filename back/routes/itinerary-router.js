const itineraryRouter = require('express').Router();
const itinerary = require('../models').Itinerary;

const getOneItinerary = (req, res) => {
	itinerary.findById(req.params.id)
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		console.log('ERROR GETTING ITINERARY BY ID ===>', err)
		res.sendStatus(500)
	})
};

const getItineraries = (req, res) => {
	itinerary.findAll()
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		console.log('ERROR GETING ALL ITINERARIES ===>', err)
		res.sendStatus(500)
	})
};

const addItinerary = (req, res) => {
	itinerary.create(req.body)
	.then((data) => {
		res.send(data)
	})
	.catch((err) => {
		console.log('ERROR ADDING NEW ITINERARY ===>', err)
		res.sendStatus(500)
	})
};

const updateItinerary = (req, res) => {
	itinerary.findOne( {where: {id: req.params.id} })
	.then((itinerary) => {
		itinerary.update(req.body)
	})
	.then(() => {res.sendStatus(200)})
	.catch((err) => {
		console.log('ERROR UPDATING ITINERARY ===>', err)
		res.sendStatus(500)
	})
};



//URL is at /api/itinerary
itineraryRouter.route('/:id')
	.get(getOneItinerary)
	.put(updateItinerary)

itineraryRouter.route('/')
	.get(getItineraries)
	.post(addItinerary)



module.exports = itineraryRouter;