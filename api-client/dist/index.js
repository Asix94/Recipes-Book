'use strict';

var rp = require('request-promise');

var api = {
    _baseUrl: function _baseUrl() {
        return 'https://radiant-tundra-87476.herokuapp.com/api';
        //return `${this.protocol}://${this.host}:${this.port}/api`
    },
    _call: function _call(method, path, body, token) {
        var options = {
            method: method,
            url: this._baseUrl() + '/' + path,
            json: true
        };

        if (body) options.body = body;

        if (token) options.headers = { authorization: 'Bearer ' + token };

        return rp(options);
    },
    login: function login(username, password) {
        return this._call('post', 'login', { username: username, password: password });
    },
    listUsers: function listUsers() {
        return this._call('get', 'users');
    },
    listUser: function listUser(token) {
        return this._call('get', 'user', undefined, token);
    },
    createUser: function createUser(name, surname, email, username, password) {
        return this._call('post', 'user', { name: name, surname: surname, email: email, username: username, password: password });
    },
    updateUser: function updateUser(name, surname, email, username, password, token) {
        return this._call('put', 'user/' + id, { name: name, surname: surname, email: email, password: password }, token);
    },
    removeUser: function removeUser(token) {
        return this._call('delete', 'user', undefined, token);
    },
    searchRecipes: function searchRecipes(query) {
        return this._call('get', 'search/' + query);
    },
    listRecipes: function listRecipes() {
        return this._call('get', 'recipes');
    },
    listRecipe: function listRecipe(id) {
        return this._call('get', 'recipe/' + id);
    },
    listMyRecipes: function listMyRecipes(token) {
        return this._call('get', 'myrecipes', undefined, token);
    },
    listMyFollowRecipes: function listMyFollowRecipes(token) {
        return this._call('get', 'myfollowrecipes', undefined, token);
    },
    createRecipe: function createRecipe(title, category, image, video, ingredients, elaboration, dificulty, preparation, region, seasson, observation, token) {
        return this._call('post', 'recipe', { title: title, category: category, image: image, video: video, ingredients: ingredients, elaboration: elaboration, dificulty: dificulty, preparation: preparation, region: region, seasson: seasson, observation: observation }, token);
    },
    updateRecipe: function updateRecipe(id, title, category, image, video, ingredients, elaboration, dificulty, preparation, region, seasson, observation, token) {
        return this._call('put', 'recipe/' + id, { title: title, category: category, image: image, video: video, ingredients: ingredients, elaboration: elaboration, dificulty: dificulty, preparation: preparation, region: region, seasson: seasson, observation: observation }, token);
    },
    removeRecipe: function removeRecipe(id, token) {
        return this._call('delete', 'recipe/' + id, undefined, token);
    },
    followRecipe: function followRecipe(id, token) {
        return this._call('put', 'recipe/follow/' + id, undefined, token);
    },
    unfollowRecipe: function unfollowRecipe(id, token) {
        return this._call('put', 'recipe/unfollow/' + id, undefined, token);
    },
    listCategories: function listCategories() {
        return this._call('get', 'categories');
    },
    listTopics: function listTopics() {
        return this._call('get', 'topics');
    }
};

module.exports = api;
