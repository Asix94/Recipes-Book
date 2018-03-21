import React, { Component } from 'react'
import api from 'api-client'
import { withRouter } from 'react-router-dom';
import './css/main.css'

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

        api.createRecipe(this.state.title,this.state.category,this.state.image,this.state.video,ingredients,elaboration,this.state.dificulty,this.state.preparation,this.state.region,this.state.seasson,this.state.observation)
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
                                <input type="text" className="form-control" name="title" id="title" placeholder="title" required onChange={this.InputValue} value={this.state.title}/>
                                <label>Category</label>
                                <input type="text" className="form-control" name="category" id="category" placeholder="category" required onChange={this.InputValue} />
                                <div className="col-md-6">
                                    <label>Dificulty</label>
                                    <input type="text" className="form-control" name="dificulty" id="dificulty" placeholder="dificulty" required onChange={this.InputValue} />
                                    <label>Preparation</label>
                                    <input type="text" className="form-control" name="preparation" id="preparation" placeholder="preparation" required onChange={this.InputValue} />
                                </div>
                                <div className="col-md-6">
                                    <label>Seasson</label>
                                    <input type="text" className="form-control" name="seasson" id="seasson" placeholder="seasson" required onChange={this.InputValue} />
                                    <label>Region</label>
                                    <input type="text" className="form-control" name="region" id="region" placeholder="region" required onChange={this.InputValue} />
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