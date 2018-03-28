import React, { Component } from 'react'
import api from '../services/api'
import storage from '../services/storage'
import { NavLink } from 'react-router-dom'

class MyFollowRecipes extends Component{

    constructor(){
        super()
        this.state = {
            recipes: []
        }
    }

    componentDidMount(){

        api.listMyFollowRecipes(storage.getToken()).then(res => res.data).then(res => res.recipesFollowing).then(recipes => this.setState({recipes}))
    }

    render(){
        return(
            <div className="container">
                <section>
                    <h1>My Follow Recipes</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Dificulty</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.recipes.map((recipe, index) => {
                                return (
                                    <tr key={index}>
                                        <td><NavLink to={"/recipe/" + recipe.category + "/" + recipe._id}>{recipe.title}</NavLink></td>
                                        <td>{recipe.category}</td>
                                        <td>{recipe.dificulty}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </section>
            </div>
        )
    }
}

export default MyFollowRecipes