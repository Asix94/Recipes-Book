import React, { Component } from 'react'
import api from '../services/api'
import RecipeBox from '../RecipeBox'

class Results extends Component {

    constructor() {
        super()
        this.state = {
            search: []
        }
    }

    componentDidMount() {

        window.scrollTo(0, 0)
        api.searchRecipes(this.props.match.params.query).then(res => res.data).then(search => this.setState({ search }))
    }

    componentWillReceiveProps(props) {

        api.searchRecipes(this.props.match.params.query).then(res => res.data).then(search => this.setState({ search }))
    }

    render() {
        return (

            <div className="container">

                <section>

                    <h2 className="title-3">Search Recipe</h2>

                    <div className="row">
                        <div className="inside">
                            {this.state.search.map((search, index) => {
                                return (
                                    <RecipeBox recipe={search} key={index} />
                                )
                            })}
                        </div>
                    </div>

                </section>

            </div>
        )
    }
}

export default Results