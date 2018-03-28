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
            <div className="container mrg130">
                <section>
                    <h1>Mis Recetas Favoritas</h1>

                    {(this.state.recipes.length)
                    ?
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Categoria</td>
                                <td>Dificultad</td>
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
                    :
                    <div>
                        <h2>No hay recetas</h2>
                    </div>
                    }
                </section>
            </div>
        )
    }
}

export default MyFollowRecipes