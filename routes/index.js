const router = require('express').Router()
const Controller = require('../controllers/mainController')
const isLogin = require('../middlewares/isLogin')
const getUserData = require('../middlewares/getUserData')
const userRouter = require('./userRouter')
const rentRouter = require('./rent')

router.get('/login',Controller.displayFormLogin)
router.post('/login',Controller.createLoginSession)
router.get('/register',Controller.displayFormRegister)
router.post('/register',Controller.registerUser)
router.get('/register/activation/:username',Controller.activation)
router.get('/admin',Controller.showAdminView)
router.use(isLogin)
router.use(getUserData)

router.get('/',Controller.displayHome)
router.get('/logout',Controller.killSession)
router.use('/users',userRouter)
router.use('/rent',rentRouter)


module.exports = router