const mongoose = require('mongoose')
const Recipe = require('./Recipe')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const User = mongoose.model('users', new Schema({
    name            :   String,
    surname         :   String,
    email           :   String,
    username        :   String,
    password        :   String,
    id_followers    :   [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}],
    recipes         :   [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}]
}));

module.exports = User