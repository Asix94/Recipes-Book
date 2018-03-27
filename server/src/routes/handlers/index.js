const login = require('./login')
const listUsers = require('./listUsers')
const listUser = require('./listUser')
const createUser = require('./createUser')
const updateUser = require('./updateUser')
const removeUser = require('./removeUser')
const searchRecipes = require('./searchRecipes')
const listRecipes = require('./listRecipes')
const listRecipe = require('./listRecipe')
const listMyRecipes = require('./listMyRecipes')
const createRecipe = require('./createRecipe')
const updateRecipe = require('./updateRecipe')
const removeRecipe = require('./removeRecipe')
const followRecipe = require('./followRecipe')
const unfollowRecipe = require('./unfollowRecipe')
const listCategories = require('./listCategories')
const createCategory = require('./createCategory')
const listTopics = require('./listTopics')
const createTopic = require('./createTopic')

module.exports = {
    login,
    listUsers,
    listUser,
    createUser,
    updateUser,
    removeUser,
    searchRecipes,
    listRecipes,
    listRecipe,
    listMyRecipes,
    createRecipe,
    updateRecipe,
    removeRecipe,
    followRecipe,
    unfollowRecipe,
    listCategories,
    createCategory,
    listTopics,
    createTopic
}