const express = require('express')
const { list } = require('./handlers')

const router = express.Router()

router.get('/recipes', list)

module.exports = router