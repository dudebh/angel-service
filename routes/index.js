const router = require('express').Router()
const Controller = require('../controllers/mainController')

router.get('/',Controller.displayHome)

module.exports = router