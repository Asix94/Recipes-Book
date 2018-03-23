const rp = require('request-promise')

const api = {

    _baseUrl(){
        with(this){
            //return 'https://radiant-tundra-87476.herokuapp.com/api'
            return `${protocol}://${host}:${port}/api`
        }
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

    createUser(name,surname,email,username,password){
        return this._call('post', 'user', {name,surname,email,password})
    },

    updateUser(token,id,name,surname,email,username,password){
        return this._call('put', `user/${id}`, {name,surname,email,password})
    },

    removeUser(token,id){
        return this._call('delete', `user/${id}`)
    },

    listRecipes(){
        return this._call('get', 'recipes')
    },

    listRecipe(id){
        return this._call('get', `recipe/${id}`)
    },

    createRecipe(token,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation){
        return this._call('post', 'recipe', {title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation})
    },

    updateRecipe(token,id,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation){
        return this._call('put', `recipe/${id}`, {title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation})
    },

    removeRecipe(token,id){
        return this._call('delete', `recipe/${id}`)
    },

    listCategories(){
        return this._call('get', 'categories')
    },

    listTopics(){
        return this._call('get', 'topics')
    },

}

module.exports = api