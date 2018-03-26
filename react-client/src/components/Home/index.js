import React, { Component } from 'react'
import Carousel from '../Carousel'
import './css/main.css'
import RecipeBox from '../RecipeBox'
import Section from '../Section'

class Home extends Component {

    render() {
        return (
            <div>
                <main>
                    <Carousel />

                    <div className="container">

                        <section>

                            <h2 className="title-3">Latest Recipe</h2>

                            <div className="row">
                                <div className="inside">
                                    {this.props.recipe.slice(0, 6).map((recipe,index) => {
                                        return (
                                            <RecipeBox recipe={recipe} key={index}/>
                                        )
                                    })}
                                </div>
                            </div>

                        </section>

                        <section>

                            <h2 className="title-3">Category</h2>

                            <div className="row">
                                {this.props.category.slice(0, 6).map((category,index) => {
                                    return(
                                        <Section category={category} key={index}/>
                                    )
                                })}
                            </div>

                        </section>

                        <section>
                            <h2 className="title-3">Popular Recipe</h2>

                            <div className="row">
                                <div className="inside">
                                    {this.props.recipe.slice(0, 6).map((recipe,index) => {
                                        return(
                                            <RecipeBox recipe={recipe} key={index}/>
                                        )
                                    })}
                                </div>
                            </div>

                        </section>

                        {/*<section>
                            <h2 className="title-3">Collection</h2>

                            <div className="row">
                                {this.props.topic.slice(0, 6).map((topic,index) => {
                                    return(
                                        <Section category={topic} key={index}/>
                                    )
                                })}
                            </div>

                            </section>*/}
                        
                    </div>

                </main>
            </div>
        )
    }
}

export default Home