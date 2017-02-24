const destinationRouter = require('express').Router();
const Destination = require('../models').Destination;
const Wanderspot = require('../models').Wanderspot;

//Retrieves one destination
const getOneDestination = (req, res) => {
  Destination.findById(req.params.id)
  .then((destination) => {
    res.send(destination)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
};

//Retrieves all destinations in the database
const getAllDestinations = (req, res) => {
  Destination.findAll()
  .then((destinations) => {
    res.send(destinations)
  })
  .catch((err) => {
    res.sendStatus(500)
  })
};

//Retrieves all destinations associated with a single user's profile
const getProfileDestinations = (req, res) => {
  Destination.findAll({
    where: { ProfileId: req.params.id },
    include: [{model: Wanderspot}],
    order: [
      ['createdAt', 'DESC']
    ]
  })
  .then((prof_destinations) => {
    res.send(prof_destinations)
  })
  .catch((error) => {
    res.sendStatus(500);
  })
}


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
//________________________________________________//
//gets all destinations visited by specified user
destinationRouter.route('/profile/:id')
.get(getProfileDestinations)

//Route to get all destinations in database and add destination
destinationRouter.route('/')
.get(getAllDestinations)
.post(addDestination)

//Route to retrieve one destination
destinationRouter.route('/:id')
.get(getOneDestination)
.put(updateDestination)



module.exports = destinationRouter;
