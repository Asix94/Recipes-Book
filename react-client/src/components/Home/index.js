import React, { Component } from 'react'
import Carousel from '../Carousel'
import './css/main.css'
import RecipeBox from '../RecipeBox'
import api from 'api-client'

class Home extends Component {

    constructor() {
        super()
        this.state = {
            recipes: [],
            users: []
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
    }

    render() {
        return (
            <div>
                <main>
                    <Carousel />

                    <div class="container">

                        <section>

                            <h2 className="title-3">Latest Recipe</h2>

                            <div className="row">
                                <div className="inside">
                                    {this.state.recipes.map(recipe => {
                                        return (
                                            <RecipeBox recipe={recipe} />
                                        )
                                    })}
                                </div>
                            </div>

                        </section>

                        <section>

                            <h2 className="title-3">Category</h2>

                            <div className="row">

                            </div>

                        </section>

                        <section>
                            <h2 className="title-3">Popular Recipe</h2>

                            <div className="row">
                                <div className="inside">
                                    {this.state.recipes.map(recipe => {
                                        return(
                                            <RecipeBox recipe={recipe}/>
                                        )
                                    })}
                                </div>
                            </div>

                        </section>

                        <section>
                            <h2 className="title-3">Collection</h2>

                            <div className="row">

                            </div>

                        </section>
                        
                    </div>

                </main>
            </div>
        )
    }
}

export default Home