import React, { Component } from 'react'
import api from 'api-client'
import './css/main.css'

class DetailRecipe extends Component {

    constructor() {
        super()
        this.state = {
            recipe: []
        }
    }

    componentDidMount() {
        api.protocol = 'http';
        api.host = 'localhost';
        api.port = '5000';

        api.listRecipe(this.props.match.params.id)
            .then(res => res.data)
            .then(recipe => this.setState({ recipe }))
    }

    render() {
        return (
            <div className="container">
                <section>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-6">
                                <h1>{this.state.recipe.title}</h1>
                                <p>{this.state.recipe.category}</p>
                                <div className="col-md-6">
                                    <p>{this.state.recipe.dificulty}</p>
                                    <p>{this.state.recipe.preparation}</p>
                                </div>
                                <div className="col-md-6">
                                    <p>{this.state.recipe.seasson}</p>
                                    <p>{this.state.recipe.region}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={this.state.recipe.image} alt={this.state.recipe.title} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="col-md-4">
                                <h2>Ingredients</h2>
                                <ul>
                                    {Array.isArray(this.state.recipe.ingredients) ? this.state.recipe.ingredients.map(ingredient => {
                                        return <li key={ingredient}>{ingredient}</li>
                                    }) : ''}
                                </ul>
                                <h2>Observation</h2>
                                <p>{this.state.recipe.observation}</p>
                            </div>
                            <div className="col-md-8">
                                <h2>Elaboration</h2>
                                <ul>
                                    {Array.isArray(this.state.recipe.elaboration) ? this.state.recipe.elaboration.map(elaboration => {
                                        return <li key={elaboration}>{elaboration}</li>
                                    }) : ''}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default DetailRecipe