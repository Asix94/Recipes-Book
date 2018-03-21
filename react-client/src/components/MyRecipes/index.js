import React, { Component } from 'react'
import api from 'api-client'

class MyRecipes extends Component {

    removeRecipe(id){

        api.protocol = 'http'
        api.host = 'localhost'
        api.port = '5000'

        api.removeRecipe(id)
        
    }

    updateRecipe(){

    }

    render() {
        return (
            <div className="container">
                <section>
                    <h1>My Recipes</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Category</td>
                                <td>Dificulty</td>
                                <td>Update</td>
                                <td>Remove</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.recipe.map((recipe, index) => {
                                return (
                                    <tr>
                                        <td>{recipe.title}</td>
                                        <td>{recipe.category}</td>
                                        <td>{recipe.dificulty}</td>
                                        <td><button className="btn">Update</button></td>
                                        <td><button className="btn" type="submit" onClick={e => {e.preventDefault(); this.removeRecipe(recipe._id)}}>Remove</button></td>
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

export default MyRecipes