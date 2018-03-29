const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
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