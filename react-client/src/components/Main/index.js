import React, { Component } from 'react'
import './index.css'
import { Route, Switch } from 'react-router-dom';
import Home from '../Home'
import CategoryBox from '../CategoryBox'
import CollectionBox from '../CollectionBox'
import DetailsRecipe from '../DetailsRecipe'
import DetailsCategory from '../DetailsCategory'
import FormRecipe from '../FormRecipe'
import MyRecipes from '../MyRecipes'
import MyFollowRecipes from '../MyFollowRecipes'
import Results from '../Results'
import api from '../services/api'
import storage from '../services/storage'

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

        api.listRecipes()
            .then(res => res.data)
            .then(recipes => this.setState({ recipes }))

        api.listUsers()
            .then(res => res.data)
            .then(users => this.setState({ users }))

        api.listCategories()
            .then(res => res.data)
            .then(categories => this.setState({ categories }))

        api.listTopics()
            .then(res => res.data)
            .then(topics => this.setState({ topics }))
    }

    componentDidUpdate() {

        api.listRecipes()
            .then(res => res.data)
            .then(recipes => this.setState({ recipes }))

    }

    render() {
        return (
            <div>

                <Switch>

                    <Route exact path="/" render={() => (
                        <Home
                            recipe={this.state.recipes}
                            category={this.state.categories}
                            topic={this.state.topics}
                        />
                    )} />

                    <Route exact path="/category" render={() => (
                        <CategoryBox
                            categories={this.state.categories}
                        />
                    )} />

                    <Route exact path="/collection" render={() => (
                        <CollectionBox
                            topics={this.state.topics}
                        />
                    )} />

                    <Route path="/recipe/:category/:id" render={routeProps => (
                        <DetailsRecipe {...routeProps}
                        />)} />

                    <Route path="/category/:category" render={routeProps => (
                        <DetailsCategory
                            {...routeProps}
                            recipe={this.state.recipes}
                        />)} />
                    
                    <Route path="/search/:query" render={routeProps => (
                        <Results {...routeProps}
                    />)} />

                    {storage.getToken()
                        ?
                        <Route path="/createrecipe" render={() => (
                            <FormRecipe />
                        )} />
                        :
                        <Route path="/" render={() => (
                            <Home
                                recipe={this.state.recipes}
                                category={this.state.categories}
                                topic={this.state.topics}
                            />
                        )} />
                    }

                    {storage.getToken()
                        ?
                        <Route path="/myrecipes" render={() => (
                            <MyRecipes
                                recipe={this.state.recipes}
                            />
                        )} />
                        :
                        <Home
                            recipe={this.state.recipes}
                            category={this.state.categories}
                            topic={this.state.topics}
                        />
                    }

                    {storage.getToken()
                        ?
                        <Route path="/myfollowrecipes" render={() => (
                            <MyFollowRecipes/>
                        )} />
                        :
                        <Home 
                            recipe={this.state.recipes}
                            category={this.state.categories}
                            topic={this.state.topics}
                        />
                    }

                </Switch>

            </div>
        );
    }
}

export default Main