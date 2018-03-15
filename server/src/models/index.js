const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

const Recipe = new Schema({
    owner: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    title: String,
    category: String,
    image: String,
    video: String,
    ingredients: Array,
    elaboration: Array,
    dificulty: String,
    preparation: String,
    region: String,
    seasson: String,
    observation: String,
    creationDate: Date
})

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: String,
    email: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: String,
    recipesFollowing: [
        {
            type: ObjectId,
            ref: 'Recipe'
        }
    ]
}),

const Category = new Schema({
    name: String,
    image: String
})

module.exports = {
    Recipe: mongoose.model('Recipe', Recipe),
    User: mongoose.model('User', User),
    Category: mongoose.model('Category', Category)
}