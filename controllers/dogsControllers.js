const { Dog } = require('../models')
const dogExplanation = require('../data/biodataOfServiceDogs.json')

class DogController {
    static displayDogs (req, res) {
        Dog.findAll({
            where: {
                availability: true
            }
        })
        .then(result => {
            // console.log(result);
            res.render('dogs', { dogs: result})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static displayRetiredDogs (req, res) {
        Dog.findAll({
            where: {
                availability: false
            }
        })
        .then(result => {
            // console.log(result);
            res.render('dogs', { dogs: result})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static displayDogsAdmin (req, res) {
        Dog.findAll({
            where: {
                availability: true
            }
        })
        .then(result => {
            // console.log(result);
            res.render('adminViews/dogsAdmin', { dogs: result})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static displayRetiredDogsAdmin (req, res) {
        Dog.findAll({
            where: {
                availability: false
            }
        })
        .then(result => {            
            res.render('adminViews/retiredDogs', {dogs: result})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static deleteDogs (req, res) {
        let id = req.params.id

        Dog.destroy({
            where: { id: id}
        })
        .then(() => {
            res.redirect('/dogs/retiredDogAdmin')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static displayAddDog (req, res) {
        res.render('adminViews/addDog')
    }

    static addDog (req, res) {
        let obj = {
            name: req.body.name,
            species: req.body.species,
            birthYear: +req.body.birthYear,
            gender: req.body.gender,
            speciality: req.body.speciality,
            availability: req.body.availability,
            biodata: req.body.biodata,
        }

        Dog.create(obj)
        .then(() => {
            res.redirect('/dogs/Admin')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static displayEditDog (req, res) {
        let id = req.params.id

        Dog.findOne({
            where: {
                id: id
            }
        })
        .then(result => {
            // console.log(result);
            res.render('adminViews/editDog', {dog: result})
        })
    }

    static editDog (req, res) {
        let id = req.params.id

        let obj = {
            name: req.body.name,
            species: req.body.species,
            birthYear: req.body.birthYear,
            gender: req.body.gender,
            speciality: req.body.speciality,
            availability: req.body.availability,
            biodata: req.body.biodata,
            updateAt: new Date()
        }
        // console.log(obj);

        Dog.update(obj, {
            where: {
                id: id
            }
        })
        .then(() => {            
            res.redirect('/dogs/admin')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static displayDetails (req, res) {
        let id = req.params.id

        Dog.findOne({
            where: {
                id: id
            }
        })
        .then(result => {            
            res.render('detailsDog', {dog: result, detail: dogExplanation})
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = DogController