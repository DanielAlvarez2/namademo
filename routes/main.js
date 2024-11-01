const express =require('express')
const router = express.Router()
const homeController = require('../controllers/home.js')

router.get('/', homeController.getIndex)
router.get('/create', homeController.getCreate)
router.post('/create', homeController.postCreate)

module.exports = router