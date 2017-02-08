const destinationRouter = require('express').Router();
const Destination = require('../models').Destination;

const getOneDestination = (req, res) => {
  Destination.findById(req.params.id)
  .then((destination) => {
    res.send(destination)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
};


const getDestinations = (req, res) => {
  Destination.findAll()
  .then((destination) => {
    res.send(destination)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
};


const addDestination = (req, res) => {
  Destination.create(req.body)
  .then((destination) => {
    res.send(destination)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
};


const updateDestination = (req, res) => {
  Destination.findOne({where: {id: req.params.id}})
  .then((destination) => {
    destination.update(req.body)
  })
  .then(() => {
    res.sendStatus(200)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
};

//URL: /api/destination
destinationRouter.route('/:id')
.get(getOneDestination)
.put(updateDestination)

destinationRouter.route('/')
.get(getDestinations)
.post(addDestination)

module.exports = destinationRouter;
