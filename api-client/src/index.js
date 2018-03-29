'use strict'

const rp = require('request-promise')

const api = {

    _baseUrl(){
        //return 'https://radiant-tundra-87476.herokuapp.com/api'
        return `${this.protocol}://${this.host}:${this.port}/api`
    },

    _call(method, path, body, token){
        const options = {
            method,
            url: `${this._baseUrl()}/${path}`,
            json: true
        }

        if(body) options.body = body

        if (token) options.headers = { authorization: `Bearer ${token}` }

        return rp(options)
    },

    login(username,password){
        return this._call('post', 'login', {username,password})
    },

    listUsers(){
        return this._call('get', 'users')
    },

    listUser(token){
        return this._call('get', 'user', undefined, token)
    },

    createUser(name,surname,email,username,password){
        return this._call('post', 'user', {name,surname,email,username,password})
    },

    updateUser(name,surname,email,username,password,token){
        return this._call('put', `user/${id}`, {name,surname,email,password}, token)
    },

    removeUser(token){
        return this._call('delete', 'user', undefined, token)
    },

    searchRecipes(query){
        return this._call('get', `search/${query}`)
    },

    listRecipes(){
        return this._call('get', 'recipes')
    },

    listRecipe(id){
        return this._call('get', `recipe/${id}`)
    },

    listMyRecipes(token){
        return this._call('get', `myrecipes`, undefined, token)
    },

    listMyFollowRecipes(token){
        return this._call('get', `myfollowrecipes`, undefined, token)
    },

    createRecipe(title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation,token){
        return this._call('post', 'recipe', {title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation}, token)
    },

    updateRecipe(id,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation,token){
        return this._call('put', `recipe/${id}`, {title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation}, token)
    },

    removeRecipe(id,token){
        return this._call('delete', `recipe/${id}`, undefined, token)
    },

    followRecipe(id,token){
        return this._call('put', `recipe/follow/${id}`, undefined, token)
    },

    unfollowRecipe(id,token){
        return this._call('put', `recipe/unfollow/${id}`, undefined, token)
    },

    listCategories(){
        return this._call('get', 'categories')
    },

    listTopics(){
        return this._call('get', 'topics')
    },

}

module.exports = api