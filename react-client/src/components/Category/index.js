import React, { Component } from 'react'
import './css/main.css'

class Category extends Component{

    render(){
        return (
            <div>
                <section>
                    <div className="container">
                        <h2>Category</h2>
                        <div className="row">
                            <div className="inside">
                                {this.props.category.map((category,index) => {
                                    <div className="col-md-4 col-sm-6 recipe" key={index}>
                                        <img src={category.image} alt={category.name} className="img-recipe"/>
                                        <h2>{category.name}</h2>
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Category