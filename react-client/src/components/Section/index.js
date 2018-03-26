import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './css/main.css'

class Section extends Component{

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
        return(
            <div className="col-md-2 category" align="center" onClick={(e) => { e.preventDefault(); this.idItem(this.props.category.name) }}>
                <img src={this.props.category.logo} alt={this.props.category.name}/>
                <h2>{this.props.category.name}</h2>
            </div>
        )
    }
}

export default withRouter(Section)