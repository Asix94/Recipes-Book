import React, { Component } from 'react'
import api from '../services/api'
import swal from 'sweetalert2'
import storage from '../services/storage'
import { NavLink } from 'react-router-dom'

class MyRecipes extends Component {
    
    constructor(){
        super()
        this.state = {
            recipes: []
        }
    }

    componentDidMount(){

        api.listMyRecipes(storage.getToken()).then(res => res.data).then(recipes => this.setState({recipes}))
    }

    componentDidUpdate(){

        api.listMyRecipes(storage.getToken()).then(res => res.data).then(recipes => this.setState({recipes}))
    }

    updateRecipe(id,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation) {

        api.updateRecipe(id,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation,storage.getToken())

    }

    removeRecipe(id){

        api.removeRecipe(id,storage.getToken())
    }

    swalRecipe(recipe) { 

         swal({
            title: 'Update Recipe',
            html:
                `<label>Title</label>` +
                `<input id="title" class="swal2-input" value="${recipe.title}">` +
                `<label>Category</label>` +
                `<input id="category" class="swal2-input" value="${recipe.category}">` +
                `<label>Dificulty</label>` +
                `<input id="dificulty" class="swal2-input" value="${recipe.dificulty}">` +
                `<label>Preparation</label>` +
                `<input id="preparation" class="swal2-input" value="${recipe.preparation}">` +
                `<label>Seasson</label>` +
                `<input id="seasson" class="swal2-input" value="${recipe.seasson}">` +
                `<label>Region</label>` +
                `<input id="region" class="swal2-input" value="${recipe.region}">` +
                `<label>Image</label>` +
                `<input id="image" class="swal2-input" value="${recipe.image}">` +
                `<label>Observation</label>` +
                `<input id="observation" class="swal2-input" value="${recipe.observation}">` +
                `<label>Ingredients</label>` +
                `<input id="ingredients" class="swal2-input" value="${recipe.ingredients}">` +
                `<label>Elaboration</label>` +
                `<input id="elaboration" class="swal2-input" value="${recipe.elaboration}">`,
            focusConfirm: false,
            preConfirm: () => {
                return {
                    title: document.getElementById('title').value,
                    category: document.getElementById('category').value,
                    dificulty: document.getElementById('dificulty').value,
                    preparation: document.getElementById('preparation').value,
                    seasson: document.getElementById('seasson').value,
                    region: document.getElementById('region').value,
                    image: document.getElementById('image').value,
                    observation: document.getElementById('observation').value,
                    ingredients: document.getElementById('ingredients').value.split(','),
                    elaboration: document.getElementById('elaboration').value.split(',')
                }
            }
        }).then(res => {
            this.updateRecipe(
                recipe._id,
                res.value.title,
                res.value.category,
                res.value.image,
                undefined,
                res.value.ingredients,
                res.value.elaboration,
                res.value.dificulty,
                res.value.preparation,
                res.value.region,
                res.value.seasson,
                res.value.observation,
            )
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    render() {
        return (
            <div className="container mrg130">
                <section>
                    <h1>Mis Recetas</h1>

                    {(this.state.recipes.length)
                    ?
                    <table className="table">
                        <thead>
                            <tr>
                                <td>Nombre</td>
                                <td>Categorias</td>
                                <td>Dificultad</td>
                                <td>Actualizar</td>
                                <td>Eliminar</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.recipes.map((recipe, index) => {
                                return (
                                    <tr key={index}>
                                        <td><NavLink to={"/recipe/" + recipe.category + "/" + recipe._id}>{recipe.title}</NavLink></td>
                                        <td>{recipe.category}</td>
                                        <td>{recipe.dificulty}</td>
                                        <td><button className="btn" type="submit" onClick={e => { e.preventDefault(); this.swalRecipe(recipe) }}>Actualizar</button></td>
                                        <td><button className="btn" type="submit" onClick={e => { e.preventDefault(); this.removeRecipe(recipe._id) }}>Eliminar</button></td>
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

export default MyRecipes