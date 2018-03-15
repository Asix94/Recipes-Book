import React, { Component } from 'react'
import './css/main.css'

class RecipeBox extends Component{
    render(){
        return(
            <div className="col-md-4 col-sm-6 recipe">
                <img src={this.props.recipe.image} alt={this.props.recipe.image} className="img-recipe"/>
                <h2>{this.props.recipe.title}</h2>
                <p>{this.props.recipe.observation}</p>
            </div>
        )
    }
}

export default RecipeBox