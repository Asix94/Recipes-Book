import React, { Component } from 'react'
import api from '../services/api'
import './css/main.css'
import '../services/storage'
import storage from '../services/storage';

class DetailRecipe extends Component {

    constructor() {
        super()
        this.state = {
            recipe: [],
            loged: false,
            follow: true,
            user: []
        }
    }

    componentDidMount() {

        window.scrollTo(0, 0)
        
        (storage.getToken()) ? this.setState({ loged: true }) : this.setState({ loged: false })

        api.listUser(storage.getToken()).then(res => res.data).then(user => this.setState({ user }))
        api.listRecipe(this.props.match.params.id)
            .then(res => res.data)
            .then(recipe => this.setState({ recipe }))
    }

    componentWillReceiveProps(){
        this.followAndUnfollow()
    }

    followRecipe(id) {

        api.followRecipe(id, storage.getToken()).then(this.followAndUnfollow()).then(window.location.reload())
    }

    unfollowRecipe(id) {

        api.unfollowRecipe(id, storage.getToken()).then(this.followAndUnfollow()).then(window.location.reload())
    }

    followAndUnfollow() {

        if (this.state.user.recipesFollowing) {
            const owner = (this.state.user.recipesFollowing.indexOf(this.state.recipe._id))
            if (owner !== -1) {
                this.setState({ follow: false })
            }
            else {
                this.setState({ follow: true })
            }
        }
    }

    render() {
        return (
            <div className="container">
                <section>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-6">
                                {(storage.getToken() && this.state.recipe.owner !== this.state.user._id)
                                    ?
                                    (this.state.follow)
                                        ?
                                        <button className="btn btn-lg primary btn-success" onClick={e => { e.preventDefault(); this.followRecipe(this.state.recipe._id) }}>Favorites</button>
                                        :
                                        <button className="btn btn-lg primary btn-danger" onClick={e => { e.preventDefault(); this.unfollowRecipe(this.state.recipe._id) }}>No Favorites</button>
                                    :
                                    ""
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
                                <img className="image" src={this.state.recipe.image} alt={this.state.recipe.title} />
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