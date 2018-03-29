const mongoose = require('mongoose')

const { User, Topic, Recipe, Category} = require('./schemas')

module.exports = {
    Recipe: mongoose.model('Recipe', Recipe),
    User: mongoose.model('User', User),
    Category: mongoose.model('Category', Category),
    Topic: mongoose.model('Topic', Topic)
}