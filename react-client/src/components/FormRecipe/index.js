import React, { Component } from 'react'
import api from 'api-client'
import { withRouter } from 'react-router-dom';
import './css/main.css'
import '../services/storage'
import storage from '../services/storage';

class FormRecipe extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            category: '',
            dificulty: '',
            seasson: '',
            preparation: '',
            region: '',
            image: '',
            ingredients: '',
            observation: '',
            elaboration: '',
            video: ''
        }
    }

    InputValue = (e) => {
        let prop = e.target.name
        this.setState({ [prop]: e.target.value })
    }

    createRecipe = () => {
        api.protocol = 'http'
        api.host = 'localhost'
        api.port = '5000'

        const ingredients = this.state.ingredients.split(',')
        const elaboration = this.state.elaboration.split(',')

        api.createRecipe(this.state.title, this.state.category, this.state.image, this.state.video, ingredients, elaboration, this.state.dificulty, this.state.preparation, this.state.region, this.state.seasson, this.state.observation, storage.getToken())
            .then(this.props.history.push('/'))
    }

    render() {
        return (
            <div className="container">
                <section>
                    <h1>Formulario</h1>


                    <h3 className="form-signin-heading">Crea tu receta</h3>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="col-md-6">
                                <label>Title</label>
                                <input type="text" className="form-control" name="title" id="title" placeholder="title" required onChange={this.InputValue} value={this.state.title} />
                                <label>Category</label>
                                <select name="category" onChange={this.InputValue}>
                                    <option value="">Categoría</option>
                                    <option value="Ensaladas">Ensaladas</option>
                                    <option value="Verduras">Verduras</option>
                                    <option value="Legumbres">Legumbres</option>
                                    <option value="Arroces">Arroces</option>
                                    <option value="Pastas y Pizzas">Pastas y Pizzas</option>
                                    <option value="Sopas, Purés y Cremas">Sopas, Purés y Cremas</option>
                                    <option value="Huevos">Huevos</option>
                                    <option value="Tapas y Pintxos">Tapas y Pintxos</option>
                                    <option value="Carnes">Carnes</option>
                                    <option value="Pescados y mariscos">Pescados y mariscos</option>
                                    <option value="Postres">Postres</option>
                                    <option value="Bebidas y Cocteles">Bebidas y Cocteles</option>
                                    <option value="Salsas y bases">Salsas y bases</option>
                                    <option value="Otros">Otros</option>
                                </select>
                                <div className="col-md-6">
                                    <label>Dificulty</label>
                                    <select name="dificulty" onChange={this.InputValue}>
                                        <option value="">Dificulty</option>
                                        <option value="facil">Facil</option>
                                        <option value="intermedia">Intermedia</option>
                                        <option value="dificil">Dificil</option>
                                        <option value="extreme">Extreme</option>
                                    </select>
                                    <label>Preparation</label>
                                    <select name="preparation" onChange={this.InputValue}>
                                        <option value="">Preparation</option>
                                        <option value="Menos de 15 minutos">Menos de 15 minutos</option>
                                        <option value="Entre 15 y 30 minutos">Entre 15 y 30 minutos</option>
                                        <option value="Entre 30 minutos y 1 hora">Entre 30 minutos y 1 hora</option>
                                        <option value="Más de 1 hora">Más de 1 hora</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label>Seasson</label>
                                    <select name="seasson" onChange={this.InputValue}>
                                        <option value="">Temporada</option>
                                        <option value="Primavera">Primavera</option>
                                        <option value="Verano">Verano</option>
                                        <option value="Otoño">Otoño</option>
                                        <option value="Invierno">Invierno</option>
                                    </select>
                                    <label>Region</label>
                                    <select name="region" onChange={this.InputValue}>
                                        <option value="">Región</option>
                                        <option value="Mediterránea">Mediterránea</option>
                                        <option value="Latina">Latina</option>
                                        <option value="Asiática">Asiática</option>
                                        <option value="Africana">Africana</option>
                                        <option value="Árabe">Árabe</option>
                                        <option value="Anglosajona">Anglosajona</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label>Image</label>
                                <input type="text" className="form-control" name="image" id="image" placeholder="image" required onChange={this.InputValue} />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="col-md-4">
                                <label>Ingredients</label>
                                <input type="text" className="form-control" name="ingredients" id="ingredients" placeholder="ingredients" required onChange={this.InputValue} />
                                <label>observation</label>
                                <input type="text" className="form-control" name="observation" id="observation" placeholder="observation" required onChange={this.InputValue} />
                            </div>
                            <div className="col-md-8">
                                <label>Elaboration</label>
                                <input type="text" className="form-control" name="elaboration" id="elaboration" placeholder="elaboration" required onChange={this.InputValue} />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.createRecipe}>A cocinar</button>

                </section>
            </div>
        )
    }
}

export default withRouter(FormRecipe)