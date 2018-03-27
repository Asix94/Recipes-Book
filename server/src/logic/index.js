const { Recipe, User, Category, Topic } = require('../models')
const mongoose = require('mongoose')

module.exports = {

    verify(username,password){
        return Promise.resolve()
            .then(() => {
                return User.findOne({ username, password }, {_id: 1, username: 1})
            })
            .then(user => {
                if(!user) throw Error('username and/or password wrong')

                return user
            })
    },

    listUsers() {
        return User.find({})
    },

    listUser(id){
        return User.findOne({_id:id})
    },

    createUser(name,surname,email,username,password){
        return User.create({name,surname,email,username,password})
    },

    updateUser(id,name,surname,email,username,password){
        return User.findByIdAndUpdate({_id:id}, {$set:{name,surname,email,username,password}})
    },

    removeUser(id){
        return User.findByIdAndRemove({_id:id})
    },

    listRecipes() {
        return Recipe.find({})
    },

    listRecipe(id){
        return Recipe.findOne({_id:id})
    },

    listMyRecipes(id){
        return Recipe.find({owner:id})
    },

    searchRecipes(query){
        const regex = new RegExp(query, 'i')
        return Recipe.find({$or:[{title:{$regex: regex}}]})
    },

    createRecipe(id,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation){
        const owner = mongoose.mongo.ObjectId(id)
        const creationDate = new Date()
        
        return Recipe.create({owner,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation})
    },

    updateRecipe(id,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation){
        return Recipe.findByIdAndUpdate({_id:id},{$set:{title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation}})
    },

    removeRecipe(id){
        return Recipe.findByIdAndRemove({_id:id})
    },

    followRecipe(idRecipe,idFollow){
        return User.findByIdAndUpdate({ _id : idFollow },{ $push: { recipesFollowing : idRecipe }})
    },
    
    unfollowRecipe(idRecipe,idFollow){
        return User.findByIdAndUpdate({ _id : idFollow }, { $pull: { recipesFollowing: idRecipe }})
    },

    listCategories(){
        return Category.find({})
    },

    createCategory(name,logo,image){
        return Category.create({name,logo,image})
    },

    listTopics(){
        return Topic.find({})
    },

    createTopic(name,logo,image){
        return Topic.create({name,logo,image})
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