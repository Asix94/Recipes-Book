import React, { Component } from 'react'
import api from 'api-client'
import swal from 'sweetalert2'
import storage from '../services/storage'

class MyRecipes extends Component {
    
    constructor(){
        super()
        this.state = {
            recipes: []
        }
    }

    componentDidMount(){

        api.protocol = 'http'
        api.host = 'localhost'
        api.port = '5000'

        api.listMyRecipes(storage.getToken()).then(res => res.data).then(recipes => this.setState({recipes}))
    }

    componentDidUpdate(){
        api.protocol = 'http'
        api.host = 'localhost'
        api.port = '5000'

        api.listMyRecipes(storage.getToken()).then(res => res.data).then(recipes => this.setState({recipes}))
    }

    updateRecipe(id,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation) {

        api.protocol = 'http'
        api.host = 'localhost'
        api.port = '5000'

        api.updateRecipe(id,title,category,image,video,ingredients,elaboration,dificulty,preparation,region,seasson,observation,storage.getToken())

    }

    removeRecipe(id){

        api.protocol = 'http'
        api.host = 'localhost'
        api.port = '5000'

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
                            {this.state.recipes.map((recipe, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{recipe.title}</td>
                                        <td>{recipe.category}</td>
                                        <td>{recipe.dificulty}</td>
                                        <td><button className="btn" type="submit" onClick={e => { e.preventDefault(); this.swalRecipe(recipe) }}>Update</button></td>
                                        <td><button className="btn" type="submit" onClick={e => { e.preventDefault(); this.removeRecipe(recipe._id) }}>Remove</button></td>
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