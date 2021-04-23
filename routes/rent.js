const router = require('express').Router()
const Controller = require('../controllers/rentController')

router.post('/add-rent', Controller.rentProcess)

module.exports = router