const express = require('express')
const { listUsers, createUser, listRecipes, listRecipe, createRecipe, listCategories, createCategory, listTopics, createTopic } = require('./handlers')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()

const router = express.Router()

router.get('/users', listUsers)

router.post('/user', jsonBodyParser, createUser)

router.get('/recipes', listRecipes)

router.get('/recipe/:id', listRecipe)

router.post('/recipe', jsonBodyParser, createRecipe)

router.get('/categories', listCategories)

router.post('/category', jsonBodyParser, createCategory)

router.get('/topics', listTopics)

router.post('/topic', jsonBodyParser, createTopic)

module.exports = router