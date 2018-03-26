import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import './css/main.css'

class RecipeBox extends Component {

    constructor() {
        super()
        this.state = {
            id: "",
            category: ""
        }
    }

    idItem = (category, id) => {
        this.props.history.push(`/recipe/${category}/${id}`)
    }

    render() {
        return (
            <div className="col-md-4 col-sm-6 recipe" key={this.props.recipe._id} onClick={(e) => { e.preventDefault(); this.idItem(this.props.recipe.category, this.props.recipe._id) }}>
                <img src={this.props.recipe.image} alt={this.props.recipe.title} className="img-recipe" />
                <h2>{this.props.recipe.title}</h2>
                <p>{this.props.recipe.observation}</p>
            </div>
        )
    }
}

export default withRouter(RecipeBox)