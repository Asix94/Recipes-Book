import React, { Component } from 'react'
import api from 'api-client'
import './css/main.css'
import '../services/storage'
import storage from '../services/storage';

class DetailRecipe extends Component {

    constructor() {
        super()
        this.state = {
            recipe: [],
            loged: false,
            user: []
        }
    }

    componentDidMount() {

        (storage.getToken()) ? this.setState({ loged: true }) : this.setState({ loged: false })

        api.protocol = 'http';
        api.host = 'localhost';
        api.port = '5000';

        api.listRecipe(this.props.match.params.id)
            .then(res => res.data)
            .then(recipe => this.setState({ recipe }))
        
        api.listUser(storage.getToken()).then(res => res.data).then(user => this.setState({ user }))
    }

    followRecipe(id){
        api.protocol = 'http';
        api.host = 'localhost';
        api.port = '5000';

        api.followRecipe(id,storage.getToken())
    }

    unfollowRecipe(id){
        api.protocol = 'http';
        api.host = 'localhost';
        api.port = '5000';

        api.unfollowRecipe(id,storage.getToken())
    }

    render() {
        return (
            <div className="container">
                <section>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-6">
                                {(this.state.loged && this.state.user._id !== this.state.recipe.owner)
                                ? 
                                <div>
                                    <button className="btn btn-lg primary btn-success" onClick={e => { e.preventDefault(); this.followRecipe(this.state.recipe._id) }}>Favorites</button>
                                    <button className="btn btn-lg primary btn-danger" onClick={e => { e.preventDefault(); this.unfollowRecipe(this.state.recipe._id) }}>No Favorites</button>
                                </div>
                                :
                                ''
                                }
                                <h1 align="center" className="mgb10">{this.state.recipe.title}</h1>
                                <h2 align="center" className="mgb">{this.state.recipe.category}</h2>
                                <div className="col-md-6">
                                    <h4><strong>Dificultad:</strong></h4>
                                    <h4 className="mgb" align="center">{this.state.recipe.dificulty}</h4>
                                    <h4><strong>Preparación:</strong></h4>
                                    <h4 className="mgb" align="center">{this.state.recipe.preparation}</h4>
                                </div>
                                <div className="col-md-6">
                                    <h4><strong>Temporada:</strong></h4>
                                    <h4 className="mgb" align="center">{this.state.recipe.seasson}</h4>
                                    <h4><strong>Región:</strong></h4>
                                    <h4 className="mgb" align="center">{this.state.recipe.region}</h4>
                                </div>
                                <div className="col-md-12">
                                    <h2>Observation</h2>
                                    <p>{this.state.recipe.observation}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className="image" src={this.state.recipe.image} alt={this.state.recipe.title}/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="col-md-4">
                                <h2 align="center">Ingredients</h2>
                                <ul className="list-group">
                                    {Array.isArray(this.state.recipe.ingredients) ? this.state.recipe.ingredients.map(ingredient => {
                                        return <li className="list-group-item" key={ingredient}>{ingredient}</li>
                                    }) : ''}
                                </ul>
                            </div>
                            <div className="col-md-8">
                                <h2 align="center">Elaboration</h2>
                                <ul className="list-group">
                                    {Array.isArray(this.state.recipe.elaboration) ? this.state.recipe.elaboration.map(elaboration => {
                                        return <li className="list-group-item" key={elaboration}>{elaboration}</li>
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