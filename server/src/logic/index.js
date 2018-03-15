const { Recipe, User } = require('../models')
const mongoose = require('mongoose')

module.exports = {

    listUser() {
        return User.find({})
    },

    listRecipe() {
        return Recipe.find({})
    },

    createRecipe(title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation){
        const owner = mongoose.mongo.ObjectId("5aa8fe111c6b613548ad0224")
        const creationDate = new Date()
        
        return Recipe.create({owner,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation})
    }

    /*createUser(name, surname, email, username, password, recipes) {
        return User.create({
            name, surname, email, username, password, recipes
        })
            .then(user => user._id)
    },*/

    /*createRecipe(id_owner, title, category, image, video, ingredients, elaboration, dificulty, preparation,
        region, seasson, observation) {
        const date_creation = new Date()

        return Recipe.create({
            id_owner, title, category, image, video, ingredients, elaboration, dificulty,
            preparation, region, seasson, observation, date_creation
        })
        .then(recipe => User.update({ _id: id_owner }, { $push:{ recipes : recipe._id } }))
      
    }*/
}