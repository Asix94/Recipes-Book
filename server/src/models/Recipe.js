const mongoose = require('mongoose')

const Schema  = mongoose.Schema
const ObjectId = Schema.ObjectId

const Recipe = new Schema({
    id_owner        :   String,
    title           :   String,
    category        :   String,
    image           :   String,
    video           :   String,
    ingredients     :   Array,
    elaboration     :   Array,
    dificulty       :   String,
    preparation     :   String,
    region          :   String,
    seasson         :   String,
    observation     :   String,
    date_creation   :   Date
});

module.exports = mongoose.model('recipes', Recipe)