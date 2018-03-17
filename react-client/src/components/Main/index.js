import React, { Component } from 'react'
import './index.css'
import { Route } from 'react-router-dom';
import Home from '../Home'
import Category from '../Category'
import Collection from '../Collection'
import api from 'api-client'

class Main extends Component {

    constructor() {
        super()
        this.state = {
            recipes: [],
            users: [],
            categories: [],
            topics: []
        }
    }

    componentDidMount() {

        api.protocol = 'http';
        api.host = 'localhost';
        api.port = '5000';

        api.listRecipe()
            .then(res => res.data)
            .then(recipes => this.setState({ recipes }))

        api.listUser()
            .then(res => res.data)
            .then(users => this.setState({ users }))

        api.listCategory()
            .then(res => res.data)
            .then(categories => this.setState({ categories }))

        api.listTopic()
            .then(res => res.data)
            .then(topics => this.setState({ topics }))
    }

    render() {
        return (
            <div>
                
                <Route exact path="/" render={() => (
                    <Home 
                        recipe={this.state.recipes}
                        category={this.state.categories}
                        topic={this.state.topics}
                    />
                )}/>

                <Route exact path="/category" render={() => (
                    <Category
                        category={this.state.categories}
                    />
                )}/>

                <Route exact path="/collection" render={() => (
                    <Collection
                        topic={this.state.topics}
                    />
                )}/>

            </div>
        );
    }
}

export default Main