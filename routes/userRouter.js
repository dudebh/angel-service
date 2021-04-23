const router = require('express').Router()
const Controller = require('../controllers/userController')

router.get('/', Controller.displayUser)
router.get('/change-role/:id', Controller.formChangeRole)
router.post('/change-role/:id', Controller.changeRole)
router.get('/delete/:id', Controller.deleteUser)

module.exports = router