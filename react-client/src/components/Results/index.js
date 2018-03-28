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

        api.searchRecipes(this.props.match.params.query).then(res => res.data).then(search => this.setState({ search }))
    }

    componentWillReceiveProps(props) {

        api.searchRecipes(this.props.match.params.query).then(res => res.data).then(search => this.setState({ search }))
    }

    render() {
        return (

            <div className="container mrg130">

                <section>

                    <h2 className="title-3">Recetas Encontradas</h2>

                    {(this.state.search.length)
                    ?
                    <div className="row">
                        <div className="inside">
                            {this.state.search.map((search, index) => {
                                return (
                                    <RecipeBox recipe={search} key={index} />
                                )
                            })}
                        </div>
                    </div>
                    :
                    <div>
                        <h2>No hay resultados</h2>
                    </div>
                    }

                </section>

            </div>
        )
    }
}

export default Results