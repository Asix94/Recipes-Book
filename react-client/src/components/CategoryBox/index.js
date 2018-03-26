import React, { Component } from 'react'
import './css/main.css'
import { withRouter } from 'react-router-dom';

class CategoryBox extends Component{

    constructor() {
        super()
        this.state = {
            category: ""
        }
    }

    idItem = (category) => {
        this.props.history.push(`/category/${category}`)
    }

    render(){
        return (
            <div>
                <main>
                    <section>
                        <div className="container">
                            <h2 className="title-3">Category</h2>
                            <div className="row">
                                <div className="inside">
                                    {this.props.categories.map((category,index) => {
                                        return(
                                            <div className="col-md-4 col-sm-6 categories" key={index} onClick={(e) => { e.preventDefault(); this.idItem(category.name) }}>
                                                <img src={category.image} alt={category.name} className="img-recipe"/>
                                                <h2 align="center">{category.name}</h2>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default withRouter(CategoryBox)