const express = require('express')
const { listUser, createUser, listRecipe, createRecipe, listCategory, createCategory, listTopic, createTopic } = require('./handlers')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

const router = express.Router()

router.get('/users', listUser)

router.post('/user', jsonBodyParser, createUser)

router.get('/recipes', listRecipe)

router.post('/recipe', jsonBodyParser, createRecipe)

router.get('/categories', listCategory)

router.post('/category', jsonBodyParser, createCategory)

router.get('/topics', listTopic)

router.post('/topic', jsonBodyParser, createTopic)

module.exports = router