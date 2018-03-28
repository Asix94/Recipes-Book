import React, { Component } from 'react'
import RecipeBox from '../RecipeBox'
import './css/main.css'

class DetailsCategory extends Component {

    render() {
        return (
            <div className="container mrg130">
                <section>
                    <h1>{this.props.match.params.category}</h1>

                    <div className="row">
                        <div className="inside">
                            {this.props.recipe.map((recipe, index) => {
                                return (
                                    (recipe.category === this.props.match.params.category) ? <RecipeBox recipe={recipe} key={index} /> : ''
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default DetailsCategory