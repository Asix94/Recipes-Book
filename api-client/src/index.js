const rp = require('request-promise')

const api = {

    _baseUrl(){
        with(this){
            //return 'https://radiant-tundra-87476.herokuapp.com/api'
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body){
        const options = {
            method,
            url: `${this._baseUrl()}/${path}`,
            json: true
        }

        if(body) options.body = body

        return rp(options)
    },

    listUsers(){
        return this._call('get', 'users')
    },

    listRecipes(){
        return this._call('get', 'recipes')
    },

    listRecipe(id){
        return this._call('get', `recipe/${id}`)
    },

    listCategories(){
        return this._call('get', 'categories')
    },

    listTopics(){
        return this._call('get', 'topics')
    },

}

module.exports = api