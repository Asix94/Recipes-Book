const express = require('express')
const { login, listUsers, listUser, createUser, updateUser, removeUser, searchRecipes, listRecipes, listRecipe, listMyRecipes, createRecipe, updateRecipe, removeRecipe, listCategories, createCategory, listTopics, createTopic } = require('./handlers')
const bodyParser = require('body-parser')
const jsonBodyParser = bodyParser.json()
const jwtValidator = require('./handlers/jwtValidator')

const router = express.Router()

router.post('/login', jsonBodyParser, login)

router.get('/users', listUsers)

router.get('/user', jwtValidator, listUser)

router.post('/user', jsonBodyParser, createUser)

router.put('/user/:id', [jwtValidator,jsonBodyParser], updateUser)

router.delete('/user/:id', jwtValidator, removeUser)

router.get('/search/:query', searchRecipes)

router.get('/recipes', listRecipes)

router.get('/recipe/:id', listRecipe)

router.get('/myrecipes', jwtValidator, listMyRecipes)

router.post('/recipe', [jwtValidator,jsonBodyParser], createRecipe)

router.put('/recipe/:id', [jwtValidator,jsonBodyParser], updateRecipe)

router.delete('/recipe/:id', jwtValidator, removeRecipe)

router.get('/categories', listCategories)

router.post('/category', jsonBodyParser, createCategory)

router.get('/topics', listTopics)

router.post('/topic', jsonBodyParser, createTopic)

module.exports = router