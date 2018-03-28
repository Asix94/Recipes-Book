import React, { Component } from 'react'
import api from '../services/api'
import { withRouter } from 'react-router-dom';
import './css/main.css'
import '../services/storage'
import storage from '../services/storage';
import Ingredients from '../Ingredients'
import Elaborations from '../Elaborations'

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
            observation: '',
            video: '',
            countIngredient: 0,
            countElaboration: 0
        }
    }

    InputValue = (e) => {
        let prop = e.target.name
        this.setState({ [prop]: e.target.value })
    }

    createRecipe = () => {

        const ingredients = []

        var arrIngredients = Object.keys(this.state).filter((prop) => {
            return prop.indexOf("ingredients") > -1
        })

        for (let i = 0; i < arrIngredients.length; i++) {
            ingredients.push(this.state[arrIngredients[i]])
        }

        const elaborations = []

        var arrElaborations = Object.keys(this.state).filter((prop) => {
            return prop.indexOf("elaboration") > -1
        })

        for (let j = 0; j < arrElaborations.length; j++){
            elaborations.push(this.state[arrElaborations[j]])
        }

        api.createRecipe(this.state.title, this.state.category, this.state.image, this.state.video, ingredients, elaborations, this.state.dificulty, this.state.preparation, this.state.region, this.state.seasson, this.state.observation, storage.getToken())
            .then(this.props.history.push('/'))
    }

    ingredients() {
        var rows = [];
        for (let i = 1; i <= this.state.countIngredient; i++) {
            rows.push(<Ingredients key={i} count={i} InputValue={this.InputValue} />)
        }
        return <div>{rows}</div>;
    }

    moreIngredients() {
        let count = this.state.countIngredient
        count++
        this.setState({ countIngredient: count })
    }

    elaborations(){
        var rows = [];
        for (let i = 1; i <= this.state.countElaboration; i++){
            rows.push(<Elaborations key={i} count={i} InputValue={this.InputValue} />)
        }
        return <div>{rows}</div>
    }

    moreElaborations(){
        let count = this.state.countElaboration
        count ++
        this.setState({ countElaboration: count })
    }

    render() {
        return (
            <div className="container mrg130">
                <section>
                    <h1>Crea tu receta</h1>

                    <div className="row">
                        <div className="col-md-6">
                            <label className="mgb">Titulo</label>
                            <input type="text" className="form-control mgb" name="title" id="title" placeholder="title" required onChange={this.InputValue} value={this.state.title} />
                        </div>
                        <div className="col-md-6">
                            <label className="mgb">Imagen (Inserta la url de la imagen)</label>
                            <input type="text" className="form-control mgb" name="image" id="image" placeholder="image" required onChange={this.InputValue} value={this.state.image} />
                        </div>
                        <div className="col-md-12">
                            <label className="mgb">Categoría</label>
                            <select name="category" className="form-control mgb" onChange={this.InputValue}>
                                <option value="" selected="true" disabled>Categoría</option>
                                <option value="Ensaladas">Ensaladas</option>
                                <option value="Verduras">Verduras</option>
                                <option value="Legumbres">Legumbres</option>
                                <option value="Arroces">Arroces</option>
                                <option value="Pastas">Pastas y Pizzas</option>
                                <option value="Sopas">Sopas, Purés y Cremas</option>
                                <option value="Huevos">Huevos</option>
                                <option value="Tapas">Tapas y Pintxos</option>
                                <option value="Carnes">Carnes</option>
                                <option value="Pescados">Pescados y mariscos</option>
                                <option value="Postres">Postres</option>
                                <option value="Bebidas">Bebidas y Cocteles</option>
                                <option value="Salsas">Salsas y bases</option>
                                <option value="Otros">Otros</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="mgb">Dificultad</label>
                            <select name="dificulty" className="form-control mgb" onChange={this.InputValue}>
                                <option value="" selected="true" disabled>Dificultad</option>
                                <option value="facil">Facil</option>
                                <option value="intermedia">Intermedia</option>
                                <option value="dificil">Dificil</option>
                                <option value="extreme">Extreme</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="mgb">Preparacion</label>
                            <select name="preparation" className="form-control mgb" onChange={this.InputValue}>
                                <option value="" selected="true" disabled>Preparacion</option>
                                <option value="Menos de 15 minutos">Menos de 15 minutos</option>
                                <option value="Entre 15 y 30 minutos">Entre 15 y 30 minutos</option>
                                <option value="Entre 30 minutos y 1 hora">Entre 30 minutos y 1 hora</option>
                                <option value="Más de 1 hora">Más de 1 hora</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="mgb">Temporada</label>
                            <select name="seasson" className="form-control mgb" onChange={this.InputValue}>
                                <option value="" selected="true" disabled>Temporada</option>
                                <option value="Primavera">Primavera</option>
                                <option value="Verano">Verano</option>
                                <option value="Otoño">Otoño</option>
                                <option value="Invierno">Invierno</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="mgb">Region</label>
                            <select name="region" className="form-control mgb" onChange={this.InputValue}>
                                <option value="" selected="true" disabled>Región</option>
                                <option value="Mediterránea">Mediterránea</option>
                                <option value="Latina">Latina</option>
                                <option value="Asiática">Asiática</option>
                                <option value="Africana">Africana</option>
                                <option value="Árabe">Árabe</option>
                                <option value="Anglosajona">Anglosajona</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="mgb">Ingredientes</label>
                            <input type="text" className="form-control mgb" name="ingredients0" id="ingredients0" placeholder="ingredients" required onChange={this.InputValue} />
                                {this.ingredients()}
                            <button className="btn btn-lg btn-primary btn-block mgb" onClick={e => { e.preventDefault(); this.moreIngredients() }}>Añadir ingrediente</button>
                        </div>
                        <div className="col-md-6">
                            <label className="mgb">Elaboracion</label>
                            <input type="text" className="form-control mgb" name="elaboration0" id="elaboration0" placeholder="elaboration" required onChange={this.InputValue} />
                                {this.elaborations()}
                            <button className="btn btn-lg btn-primary btn-block mgb" onClick={e => { e.preventDefault(); this.moreElaborations() }}>Añadir elaboracion</button>
                        </div>
                        <div className="col-md-12">
                            <label className="mgb">Observacion</label>
                            <textarea rows="4" className="form-control mgb" name="observation" id="observation" placeholder="observation" required onChange={this.InputValue} />
                        </div>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block mgb" type="submit" onClick={this.createRecipe}>A cocinar</button>

                </section>
            </div>
        )
    }
}

export default withRouter(FormRecipe)