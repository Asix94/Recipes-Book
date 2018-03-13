const Recipe = require('../models/Recipe')

module.exports = {

    list(){
        return Recipe.find({})
    }
}