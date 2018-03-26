import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Search extends Component {

    constructor(){
        super()
        this.state = {
            query:''
        }
    }

    keepInput = (e) => this.setState({ query: e.target.value})

    search(){
        if(this.state.query)
        this.props.history.push(`/search/${this.state.query}`)
    }

    render() {
        return (
            <div>
                <form className="navbar-form navbar-left" onSubmit={e => { e.preventDefault(); this.search() }}>
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search" name="search" onChange={this.keepInput} value={this.state.query}/>
                        <div className="input-group-btn">
                            <button className="btn btn-default" type="submit">
                                <i className="glyphicon glyphicon-search" />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

const SearchWithRouter = withRouter(Search)

export default SearchWithRouter