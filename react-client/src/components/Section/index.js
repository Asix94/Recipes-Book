import React, { Component } from 'react'

class Section extends Component{
    render(){
        return(
            <div className="col-md-2" align="center">
                <img src={this.props.category.logo} alt={this.props.category.name}/>
                <h2>{this.props.category.name}</h2>
            </div>
        )
    }
}

export default Section