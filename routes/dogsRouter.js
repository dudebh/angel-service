const express = require('express')
const DogController = require('../controllers/dogsControllers')
const dogsRouter = express.Router()

dogsRouter.get('/', DogController.displayDogs)

dogsRouter.get('/retiredDog', DogController.displayRetiredDogs)

dogsRouter.get('/details/:id', DogController.displayDetails)

// admin only itu pake session?

dogsRouter.get('/admin', DogController.displayDogsAdmin)

dogsRouter.get('/retiredDogAdmin', DogController.displayRetiredDogsAdmin)

dogsRouter.get('/retiredDogAdmin/delete/:id', DogController.deleteDogs)

dogsRouter.get('/addDog', DogController.displayAddDog)

dogsRouter.post('/addDog', DogController.addDog)

dogsRouter.get('/editDog/:id', DogController.displayEditDog)

dogsRouter.post('/editDog/:id', DogController.editDog)

module.exports = dogsRouter