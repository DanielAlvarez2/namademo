const express = require('express')
const router = express.Router()
const updateController = require('../controllers/update.js')

router.post('/createWine', updateController.createWine)

module.exports = router