const mongoose = require('mongoose')

const { Schema, Schema: { ObjectId } } = mongoose

module.exports = new Schema({
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
})