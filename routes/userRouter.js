const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')

//Register User
router.post('/register', userCtrl.registerUser)

//Login User
router.post('/login', userCtrl.loginUser)

module.exports = router