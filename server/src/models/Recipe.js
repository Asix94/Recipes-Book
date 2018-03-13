const mongoose = require('mongoose')

const Recipe = mongoose.model('recipes', {
    id_owner: String,
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
    id_followers: Array,

});

module.exports = Recipe