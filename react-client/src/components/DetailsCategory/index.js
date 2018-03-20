import React, { Component } from 'react'
import RecipeBox from '../RecipeBox'

class DetailsCategory extends Component{

    render(){
        return(
            <div>
                <div className="container">
                    <section>
                        <h1>{this.props.match.params.category}</h1>

                        <div className="row">
                            <div className="inside">
                                {this.props.recipe.map((recipe,index) => {
                                    return(
                                        (recipe.category === this.props.match.params.category) ? <RecipeBox recipe={recipe} key={index}/> : ''
                                    )
                                })}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default DetailsCategory