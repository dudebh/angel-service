const router = require('express').Router()
const Controller = require('../controllers/mainController')
const isLogin = require('../middlewares/isLogin')

router.get('/login',Controller.displayFormLogin)
router.post('/login',Controller.createLoginSession)
router.get('/register',Controller.displayFormRegister)
router.post('/register',Controller.registerUser)
router.get('/register/activation/:username',Controller.activation)
router.get('/admin',Controller.showAdminView)
// router.use(isLogin)

router.get('/',Controller.displayHome)


module.exports = router